class CreateProposals < ActiveRecord::Migration[5.1]
  def change
    create_table :proposals do |t|
      t.string :customer
      t.string :portfolio_url
      t.decimal :estimated_hours
      t.decimal :hourly_rate
      t.integer :weeks_to_complate
      t.string :client_email
      t.string :tools

      t.timestamps
    end
  end
end
