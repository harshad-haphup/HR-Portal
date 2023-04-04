class UserController < ApplicationController
    
    def create
        user=User.new({first_name:params[:first_name],middle_name:params[:middle_name],last_name:params[:last_name],email:params[:email],contact_no:params[:contact_no],address:params[:address],bank_name:params[:bank_name],account_no:params[:account_no],ifsc_no:params[:ifsc_no],job_profile:params[:job_profile],is_admin:params[:is_admin].to_s,salary:params[:salary].to_s,password:params[:password]})
        user.save
        render json:{'success':true,'user':user}, status: :ok
    end

    def index
        users=User.all
        render json:{'users':users}, status: :ok
    end

    def show
        user=User.find(params[:id])
        user.salary
        render json:{'user':user}, status: :ok
    end

    

    def update
        user=User.find_by(id:params[:id])
        user.update({first_name:params[:first_name],middle_name:params[:middle_name],last_name:params[:last_name],email:params[:email],contact_no:params[:contact_no],address:params[:address],bank_name:params[:bank_name],account_no:params[:account_no],ifsc_no:params[:ifsc_no],job_profile:params[:job_profile],is_admin:params[:is_admin].to_s,salary:params[:salary].to_s,password:params[:password]})
        render json:{'user':user}, status: :ok
    end

    def destroy
        begin
            user=User.find(params[:id])
        rescue ActiveRecord::RecordNotFound => e
            render json: { error: e.to_s}, status: :ok
        end
        if user
            user.destroy
            users=User.all
            render json: { 'users': users}, status: :ok
        end
    end

    def count
        count=User.count
        render json: { 'count': count}, status: :ok
    end
    
    def job_profiles
        job_profiles=User.distinct.pluck(:job_profile)
        render json: { 'job_profiles': job_profiles}, status: :ok
    end

    def reporte
        @User=params[:id]
        respond_to do |format|
            format.html
            format.pdf do
            #   render pdf: "reporte", template: 'user/reporte', layout: 'pdf.html'   # Excluding ".pdf" extension.
                # render :pdf => "monthly_events.pdf",:template => "user/reporte.html.erb"
                render pdf: "recipt", template: 'user/reporte', formats: [:html]
            end
          end
    end
    
    def getUserAllDeduction
        users=User.all.includes(:deductions)
        userList=[]
        users.each do |user|
            userInfo={
                user_id: user.id,
                user_name:  "#{user.first_name}  #{user.last_name}",
                salary: user.salary,
                total_deduction: total_deduction(user),
                deductions: user.deductions
            };
            userList.push(userInfo)
        end
        render json: userList, status: :ok
    end

    private
    def total_deduction(user)
        total=user.deductions.sum(:deduction_one_amt).to_f+user.deductions.sum(:deduction_two_amt).to_f+user.deductions.sum(:deduction_three_amt).to_f
    end
end
