# MTMailRange (MetaTrader5SDK)

|  | [ Structures ](reference_structures.md "Structures")/ MTMailRange | [](mttickstat.md "MTTickStat") [](mtlogrecord.md "MTLogRecord") |
| --- | --- | --- |
| --- | --- |

MTMailRange
This structure is used to describe the range of recipients of the mailing list. The structure is defined with the one-byte alignment.
# pragma pack(push,1) struct MTMailRange { UINT64 first_login; // The first login in the range UINT64 last_login;  // The last login in the range UINT reserved[4];  // A reserved field }; #pragma pack(pop)  
---  
This structure is used in the following methods:
  * [IMTMail::ToRangesAdd](imtmail_torangesadd.md "ToRangesAdd")
  * [IMTMail::ToRangesNext](imtmail_torangesnext.md "ToRangesNext")

The structure contains the following parameters:
| Field | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| first_login | UINT64 | A login with which the range of the mailing list begins. |
| last_login | UINT64 | A login with which the range of the mailing list ends. |
| reserved | UINT | A reserved field for future use. |