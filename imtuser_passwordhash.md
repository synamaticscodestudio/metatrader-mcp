# PasswordHash (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ PasswordHash | [](imtuser_lastpasschange.md "LastPassChange") [](imtuser_otpsecret.md "OTPSecret") |
| --- | --- | --- |
| --- | --- |

IMTUser::PasswordHash
Get the password hash of a client record.
C++
MTAPIRES IMTUser::PasswordHash( const UINT type // password type MTAPISTR& password_hash // password hash ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.PasswordHash( uint type // password type out string password_hash // password hash )  
---  
Parameters
type
[in] The type of the password, the hash of which should be received. The type is specified using the [IMTUser::EnUsersPasswords](imtuser_enum.htm#enuserspasswords) enumeration.
password_hash
[out] A pointer to a string containing a password hash.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
For security reasons, client passwords are stored in the trading platform in the form of password hashes. In fact, the function returns a hash of a password hash.
The function can be used to control uniqueness of passwords set by clients. For example, if a company security policy states that each new password of a client trade account should differ from the previously used ones, the database of password hashes can be introduced. If a user changes the password, the new password hash is compared to the previous passwords' hashes accumulated in the database.
This method is used only in the MetaTrader 5 Server API. When called from the Manager API, the method always returns an empty string for security reasons.