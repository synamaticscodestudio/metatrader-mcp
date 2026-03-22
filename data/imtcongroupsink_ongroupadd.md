# OnGroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSink ](imtcongroupsink.md "IMTConGroupSink")/ OnGroupAdd | [](imtcongroupsink.md "IMTConGroupSink") [](imtcongroupsink_ongroupupdate.md "OnGroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSink::OnGroupAdd
A handler of the event of adding a new group.
C++
virtual void IMTConGroupSink::OnGroupAdd( const IMTConGroup* config // A pointer to the group object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConGroupSink.OnGroupAdd( CIMTConGroup  config // The group object )  
---  
Parameters
config
[in] A pointer to the object of the added group.
Note
This method is called by the API to notify of adding of a new group.