class UserController < ApplicationController
    
    def create
        user=User.new({first_name:params[:first_name],middle_name:params[:middle_name],last_name:params[:last_name],email:params[:email],contact_no:params[:contact_no],address:params[:address],bank_name:params[:bank_name],account_no:params[:account_no],ifsc_no:params[:ifsc_no],job_profile:params[:job_profile],is_admin:params[:is_admin].to_s,salary:params[:salary]})
        user.save
        render json:{'success':true,'user':user}, status: :ok
    end

    def index
        users=User.all
        render json:{'users':users}, status: :ok
    end

    def show
        user=User.find(params[:id])
        render json:{'user':user}, status: :ok
    end

    def update
        user=User.find(params[:id])
        user.update({first_name:params[:first_name],middle_name:params[:middle_name],last_name:params[:last_name],email:params[:email],contact_no:params[:contact_no],address:params[:address],bank_name:params[:bank_name],account_no:params[:account_no],ifsc_no:params[:ifsc_no],job_profile:params[:job_profile],is_admin:params[:is_admin].to_s,salary:params[:salary]})
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
end
