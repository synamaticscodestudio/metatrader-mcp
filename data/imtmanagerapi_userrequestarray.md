# UserRequestArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserRequestArray | [](imtmanagerapi_userrequest.md "UserRequest") [](imtmanagerapi_userrequestbylogins.md "UserRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserRequestArray
Request an array of client records by the group name.
C++
MTAPIRES IMTManagerAPI::UserRequestArray( LPCWSTR group, // Client group IMTUserArray* users // Array of client records )  
---  
.NET
MTRetCode CIMTManagerAPI.UserRequestArray( string group, // Client group CIMTUserArray obj // Array of client records )  
---  
Python
ManagerAPI.UserRequestByGroup( str group # Client group )  
---  
ManagerAPI.UserRequestByGroupCSV( str group, # Client group str fields # Comma-separated list of required fields )  
---  
ManagerAPI.UserRequestByGroupNumPy( str group, # Client group str fields # Comma-separated list of required fields )  
---  
Parameters
group
[in] One or more groups, separated by commas, from which accounts are requested. The full group name must be specified, including the path. For example, demo\demoforex. The group name can be obtained using the [IMTConGroup::Group](imtcongroup_group.md "Group") method. Groups can also be specified using wildcard characters: "*" (any value) and "!" (exclude). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex.
user
[out] An array of objects of users. The object of array of users must first be created using the [IMTManagerAPI::UserCreateArray](imtmanagerapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
This method copies the data of users with the group to the users array object.
This method cannot be called from event handlers (any methods of IMT*Sink classes).