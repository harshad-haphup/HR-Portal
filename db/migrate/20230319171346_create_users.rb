class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :email
      t.string :contact_no
      t.string :address
      t.string :job_profile
      t.string :is_admin
      t.float :salary

      t.timestamps
    end
  end
end