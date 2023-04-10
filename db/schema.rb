# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_04_10_053443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "authentication_token"
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "contact_no"
    t.string "email"
    t.string "address"
    t.string "postal_code"
    t.string "fax"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "deductions", force: :cascade do |t|
    t.integer "house_rent_allowances", default: 0
    t.integer "conveyance_allowances", default: 0
    t.integer "medical_allowances", default: 0
    t.integer "spcial_allowances", default: 0
    t.integer "epf_deduction", default: 0
    t.integer "health_insurance_deduction", default: 0
    t.integer "professional_tax_deduction", default: 0
    t.integer "tds_deduction", default: 0
    t.integer "user_id", default: 0
    t.string "payroll_month"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "email", default: "", null: false
    t.text "encrypted_password"
    t.string "contact_no"
    t.string "address"
    t.string "bank_name"
    t.string "account_no"
    t.string "ifsc_no"
    t.string "job_profile"
    t.integer "is_admin"
    t.integer "company_id", default: 0
    t.string "authentication_token"
    t.text "encrypted_salary"
    t.text "encrypted_salary_iv"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
