class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :phone, :string
    add_column :users, :age, :string
    add_column :users, :gender, :string
    add_column :users, :address, :text
  end
end
