class AddIsActiveToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_active, :integer, default:0
  end
end
