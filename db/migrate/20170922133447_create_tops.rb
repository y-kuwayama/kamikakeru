class CreateTops < ActiveRecord::Migration
  def change
    create_table :tops do |t|
        t.string      :number
        t.string       :lon
        t.string        :lat
      t.timestamps
    end
  end
end
