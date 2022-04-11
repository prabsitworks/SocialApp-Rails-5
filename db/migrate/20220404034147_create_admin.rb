class CreateAdmin < ActiveRecord::Migration[5.2]
  def change
    create_table :admins do |t|
      t.string   :userid
      t.string   :cadmin
      t.datetime :admincreatedat
    end
  end
end
