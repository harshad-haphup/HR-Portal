class User < ApplicationRecord
    attr_encrypted_options.merge!(:encode => true)
    attr_encrypted :salary, key: "@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp"
    attr_encrypted :password, key: "@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp"

    has_many :deductions, dependent: :destroy
    validates :first_name, presence: true, length: { maximum: 20 }
    validates :middle_name, presence: true, length: { maximum: 20 }
    validates :last_name, presence: true, length: { maximum: 20 }
    validates :email, presence: true
    validates :contact_no, presence: true
    validates :address, presence: true, length: { maximum: 100 }
    validates :bank_name, presence: true
    validates :account_no, presence: true
    validates :ifsc_no, presence: true
    validates :job_profile, presence: true
    enum is_admin: { true: 1, false: 0 }
    validates :is_admin, presence: true
    validates :salary, presence: true
    validates :password, presence: true
end



