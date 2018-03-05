# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# create_table "freelance_documents", force: :cascade do |t|
#     t.string "title"
#     t.string "description"
#     t.text "file_url"
#     t.text "image_url"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
# end


10.times do |d|
    FreelanceDocument.create(
        title: "Document #{d}",
        description: "If you empower or balance with a bright career, volume yearns you.",
        file_url: "https://drive.google.com/file/d/0B6w6rFNfdyXnNmZLRzB6dGx4WjA/view?usp=sharing",
        image_url: "https://www.gannett-cdn.com/-mm-/8bfff369e8de052d32418b981bc0aad0a6b5f706/c=0-295-5802-3573&r=x329&c=580x326/local/-/media/2016/12/23/USATODAY/USATODAY/636181049683287385-GettyImages-492024883.jpg")
end

