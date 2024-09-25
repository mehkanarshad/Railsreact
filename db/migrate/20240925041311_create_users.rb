class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      ## Required for `devise_token_auth`
      t.string :provider, null: false, default: "email"
      t.string :uid, null: false, default: ""

      ## Database authenticatable (required by both Devise and Devise Token Auth)
      t.string :email, null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean :allow_password_change, default: false

      ## Rememberable
      t.datetime :remember_created_at

      ## Confirmable (optional, if you need it)
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email

      ## Lockable (optional, if needed)
      # t.integer  :failed_attempts, default: 0, null: false
      # t.string   :unlock_token
      # t.datetime :locked_at

      ## User Info (from Devise Token Auth)
      t.string :name
      t.string :nickname
      t.string :image

      ## Tokens (required for `devise_token_auth`)
      t.text :tokens

      t.timestamps null: false
    end

    ## Indexes
    add_index :users, :email, unique: true
    add_index :users, [:uid, :provider], unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token, unique: true
  end
end
