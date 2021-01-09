const UserRole = {
	ADMIN_R: 1,
	USER_R: 2,
}
const Gender = {
	MALE: 1,
	FEMALE: 2
}

const UserStatus = {
	FIRST_TIME: 11,
	ACTIVE: 1,
	INACTIVE: 4,
}

const SignUpStatus = {
	VERIFIED: 2,
	PENDING: 3,
	REJECTED: 4
}

const EmailStatus = {
	VERIFIED: 2,
	PENDING: 3,
	FIRST_TIME: 11
}

const AddressType = {
	RESIDENTIAL: 10,
	PERMANENT: 11,
	FINANCIAL: 12
}

const BooleanType = {
	YES: 1,
	NO: 0
}

module.exports = Object.freeze({
	UserRole,
	Gender,
	UserStatus,
	SignUpStatus,
	EmailStatus,
	BooleanType,
})