class AddDisableynToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :disableyn, :string
  end
end
