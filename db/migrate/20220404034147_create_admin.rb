class CreateAdmin < ActiveRecord::Migration[5.2]
  def change
    create_table :admins do |t|
      t.bigint   :user_id
      t.string   :cadmin
    end
  end
end
