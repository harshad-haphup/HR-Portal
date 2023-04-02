class Deduction < ApplicationRecord
    belongs_to :user
    
    validates :user_id, presence: true
    validates :deduction_one_amt, presence: true
end
