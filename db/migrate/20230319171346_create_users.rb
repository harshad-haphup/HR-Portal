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
      t.text :salary
      t.text :password

      t.timestamps
    end
  end
end
