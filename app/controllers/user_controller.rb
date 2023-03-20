class UserController < ApplicationController
    
    def create
        user=User.new({first_name:params[:first_name],middle_name:params[:middle_name],last_name:params[:last_name],email:params[:email],contact_no:params[:contact_no],address:params[:address],job_profile:params[:job_profile],is_admin:params[:is_admin],salary:params[:salary]})
        user.save
        render json:{'success':true,'user':user}, status: :ok
    end

    def index
        user=User.all
        render json:{'user':user}, status: :ok
    end

    # def show
    #     task=Task.find(params[:id])
    #     render json:{'task':task}, status: :ok
    # end

    # def update
    #     task=Task.find(params[:id])
    #     task.update({name:params[:name],description:params[:description],iscompleted:params[:iscompleted]})
    #     render json:{'task':task}, status: :ok
    # end

    # def destroy
    #     Task.destroy(params[:id])
    #     task=Task.all
    #     render json:{'tasks':task}, status: :ok
    # end
end
