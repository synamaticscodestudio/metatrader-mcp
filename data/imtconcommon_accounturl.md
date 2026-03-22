# AccountURL (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountURL | [](imtconcommon_totalpositions.md "TotalPositions") [](imtconcommon_accountdepositurl.md "AccountDepositURL") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::AccountURL
Gets the address a client is redirected to when opening a demo account from the client terminal.
C++
LPCWSTR IMTConCommon::AccountURL() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.AccountURL()  
---  
Python (Manager API)
MTConCommon.AccountURL  
---  
Return Value
If successful, it returns a pointer to the string with the address. Otherwise, it returns NULL.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
IMTConCommon::AccountURL
Sets the address a client is redirected to when opening a demo account from the client terminal.
C++
MTAPIRES IMTConCommon::AccountURL( LPCWSTR url // The address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommon.AccountURL( string  url // The address )  
---  
Python (Manager API)
MTConCommon.AccountURL  
---  
Parameters
name
[in] The address a client is redirected to when opening a demo account from the client terminal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Request parameters separated by "&" symbol are additionally passed in the address line:
www.accountallocation.url/?type=demo&acp=1251&label=CompanyName&server=ServerName&interface=English&cid=3c8e1d9cd303dbd0d5686b729689d556  
---  
  * type — account type: demo or real.
  * acp — code page used by a trader.
  * label — name of the company which owns the terminal White Label.
  * server — name of the server a trader has selected when opening an account.
  * interface — client terminal's interface language.
  * cid — a unique ID of the trader's computer.

When forming a request, the presence of "?" symbol in Account allocation URL parameter is checked. In other words, it is checked whether the specified address contains its own request parameters:
  * If there is no "?" symbol in the address, it is formed with the standard set of parameters described above. For example, www.mycompany.com.
  * If "?" symbol is present in the address, standard parameters are added to the specified custom ones. For example, if www.mycompany.com?utm_campaign=terminal address is specified, the final line has the following look: www.mycompany.com?utm_campaign=terminal&type=demo&acp=.... . 
