class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.date :joined
      t.string :username
      t.string :membership

      t.timestamps
    end
  end
end
