class DeductionController < ApplicationController
    def create
        @users=User.where(job_profile:params[:job_profile])
        begin
            @users.each do |user|
                deduction = user.deductions.build(deduction_params)
                deduction.save
            end            
            render json:{'success':true,'deduction':@users}, status: :ok
        rescue Exception => e
            render json: { error: e.to_s}, status: :ok
        end
    end

    def index
        deductions=Deduction.all
        render json:{'deductions':deductions}, status: :ok
    end

    private
  
  def deduction_params
    params.require(:deduction).permit(:deduction_one_amt, :deduction_two_amt, :deduction_three_amt)
  end
end
