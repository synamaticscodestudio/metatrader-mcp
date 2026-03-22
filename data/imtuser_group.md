# Group (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Group | [](imtuser_login.md "Login") [](imtuser_certserialnumber.md "CertSerialNumber") |
| --- | --- | --- |
| --- | --- |

IMTUser::Group
Get the group to which the user is included.
C++
LPCWSTR IMTUser::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.Group()  
---  
Return Value
If successful, it returns a pointer to a string with the group of a user. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
IMTUser::Group
Set the group of a user.
C++
MTAPIRES IMTUser::Group( LPCWSTR group // Group of accounts )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Group( string group // Group of accounts )  
---  
Parameters
group
[in] A group of accounts in accordance with the hierarchy of groups in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A group is specified in accordance with the hierarchy of groups in the trading platform. You can specify only a group that belongs to the same server where the plugin is running.
The [IMTConGroup::Group](imtcongroup_group.md "Group") value is used as the group name.
The maximum length of the group name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
If an account has open positions as at the group changing time, the [IMTPositionSink::OnPositionDelete](imtpositionsink_onpositiondelete.md "OnPositionDelete") and [IMTPositionSink::OnPositionAdd](imtpositionsink_onpositionadd.md "OnPositionAdd") handlers will be called for them. In this case, the old position is deleted from the account in the old group and a new position is added in the new group.