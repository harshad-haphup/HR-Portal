class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :email
      t.string :contact_no
      t.string :address
      t.string :bank_name
      t.string :account_no
      t.string :ifsc_no
      t.string :job_profile
      t.integer :is_admin
      t.text :encrypted_salary
      t.text :encrypted_password
      t.text :encrypted_salary_iv
      t.text :encrypted_password_iv
      

      t.timestamps
    end
  end
end
