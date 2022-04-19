# == Schema Information
# Table name: users
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  sign_in_count          :integer          default(0), not null
#  provider               :string
#  uid                    :string
#  name                   :string
#  image                  :text
#  disableyn              :string          
#  admin                  :string
#  phone                  :string
#  age                    :string
#  gender                 :string
#  address                :string

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]
 # Image uploader
	mount_uploader :image, ImageUploader
	
	# Scope for user if it is active or not
	scope :disabled, -> {where(disableyn: 'Y')}

	## ENUM
  enum role: {user: 0, admin: 1} 

	## Associations
  # has_one :admin, dependent: :destroy

	# Validation on the fields
	validates :name, :age, :gender, :address, :email, presence: true
	
	# Validates uniqueness of email
	validates_uniqueness_of :email

	# Validates format of email
	validates_format_of :email,
                      with: /\A[^@]+@[^@]+\z/,
                      allow_blank: true,
                      if: :email_changed?

	# Used for new user session
	def self.new_with_session(params, session)
		super.tap do |user|
			if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
				user.email = data["email"] if user.email.blank?
			end
		end
	end

	# Data fetched from social network
	def self.from_omniauth(auth)
		where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
			user.email = auth.info.email
			user.password = Devise.friendly_token[0,20]
			user.name = auth.info.name   # assuming the user model has a name
			user.image = auth.info.image # assuming the user model has an image
		end
	end

	## Allow Only Active Users to Login
	def active_for_authentication?
		super && !disableyn?
	end
end
