class UserController < ApplicationController
    
    def create
        user=User.new({first_name:params[:first_name],middle_name:params[:middle_name],last_name:params[:last_name],email:params[:email],contact_no:params[:contact_no],address:params[:address],job_profile:params[:job_profile],is_admin:params[:is_admin].to_s,salary:params[:salary]})
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
        user.update({first_name:params[:first_name],middle_name:params[:middle_name],last_name:params[:last_name],email:params[:email],contact_no:params[:contact_no],address:params[:address],job_profile:params[:job_profile],is_admin:params[:is_admin],salary:params[:salary]})
        render json:{'user':user}, status: :ok
    end

    def destroy
        User.destroy(params[:id])
        users=User.all
        render json:{'users':users}, status: :ok
    end
end
