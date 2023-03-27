class CreateDeductions < ActiveRecord::Migration[6.1]
  def change
    create_table :deductions do |t|
      t.integer :deduction_one_amt
      t.integer :deduction_two_amt
      t.integer :deduction_three_amt
      t.integer :user_id, foreign_key: true

      t.timestamps
    end
  end
end
