class User < ApplicationRecord
    validates :first_name, presence: true, length: { maximum: 20 }
    validates :middle_name, presence: true, length: { maximum: 20 }
    validates :last_name, presence: true, length: { maximum: 20 }
    validates :email, presence: true
    validates :contact_no, presence: true
    validates :address, presence: true, length: { maximum: 100 }
    validates :job_profile, presence: true
    enum is_admin: { true: 1, false: 0 }
    validates :is_admin, presence: true
    validates :salary, presence: true
end


