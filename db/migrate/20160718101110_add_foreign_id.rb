class AddForeignId < ActiveRecord::Migration
  def change
    add_column :users, :mbti_id, :string
    add_column :users, :numberology_id, :string
    add_column :users, :horoscope_id, :string
  end
end
