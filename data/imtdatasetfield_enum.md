# Enumerations (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ Enumerations | [](imtdatasetfield.md "IMTDatasetField") [](imtdatasetfield_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTDatasetField](imtdatasetfield.md "IMTDatasetField") interface contains the following enumerations:
  * [IMTDatasetField::EnFieldType](imtdatasetfield_enum.htm#enfieldtype)
  * [IMTDatasetField::EnFieldId](imtdatasetfield_enum.htm#enfieldid)
  * [IMTDatasetField::EnFieldFlags](imtdatasetfield_enum.htm#enfieldflags)
  * [IMTDatasetField::EnGender](imtdatasetfield_enum.htm#engender)
  * [IMTDatasetField::EnClientType](imtdatasetfield_enum.htm#enclienttype)
  * [IMTDatasetField::EnClientStatus](imtdatasetfield_enum.htm#enclientstatus)
  * [IMTDatasetField::EnEmployment](imtdatasetfield_enum.htm#enemployment)
  * [IMTDatasetField::EnEmploymentIndustry](imtdatasetfield_enum.htm#enemploymentindustry)
  * [IMTDatasetField::EnEducationLevel](imtdatasetfield_enum.htm#eneducationlevel)
  * [IMTDatasetField::EnWealthSource](imtdatasetfield_enum.htm#enwealthsource)
  * [IMTDatasetField::EnPreferredCommunication](imtdatasetfield_enum.htm#enpreferredcommunication)
  * [IMTDatasetField::EnTradingExperience](imtdatasetfield_enum.htm#entradingexperience)

IMTDatasetField::EnFieldType
Field types are enumerated in IMTDatasetField::EnFieldType:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TYPE_NONE | 0 | None. |
| TYPE_INT | 1 | Integer. |
| TYPE_UINT | 2 | Unsigned integer. |
| TYPE_DOUBLE | 3 | Floating point number. |
| TYPE_STRING | 4 | String. |
| TYPE_FIRST |  | Beginning of enumeration. Corresponds to TYPE_NONE. |
| TYPE_LAST |  | End of enumeration. It corresponds to TYPE_STRING. |

The enumeration is used in the [IMTDatasetField::Type](imtdatasetfield_type.md "Type") method.
IMTDatasetField::EnFieldId
IMTDatasetField::EnFieldId contains identifiers for matching IMTDatasetField fields and user/client/deal record fields:
| Identifier | Value | Type | Description |
| --- | --- | --- | --- |
| --- | --- | --- | --- |

Trading Account Fields  
FIELD_USER_LOGIN | 1 | int | User login (account number). Corresponds to [IMTUser::Login](imtuser_login.md "Login").  
FIELD_USER_GROUP | 2 | string | User group. Corresponds to [IMTUser::Group](imtuser_group.md "Group").  
FIELD_USER_CERT_SERIAL_NUMBER | 3 | uint | The number of the last certificate which was used by the client for authorization. Corresponds to [IMTUser::CertSerialNumber](imtuser_certserialnumber.md "CertSerialNumber").  
FIELD_USER_RIGHTS | 4 | uint | User permissions. Corresponds to [IMTUser::Rights](imtuser_rights.md "Rights").  
FIELD_USER_REGISTRATION | 5 | int | Account creation dates. Corresponds to [IMTUser::Registration](imtuser_registration.md "Registration").  
FIELD_USER_LAST_ACCESS | 6 | int | The date of the last connection using the account. Corresponds to [IMTUser::LastAccess](imtuser_lastaccess.md "LastAccess").  
FIELD_USER_NAME | 7 | string | The name of the client in the account. Corresponds to [IMTUser::Name](imtuser_name.md "Name").  
FIELD_USER_COMPANY | 8 | string | Client's company name. Corresponds to [IMTUser::Company](imtuser_company.md "Company").  
FIELD_USER_ACCOUNT | 9 | string | Client account in the external trading system. Corresponds to [IMTUser::Account](imtuser_account.md "Account").  
FIELD_USER_COUNTRY | 10 | string | Client's country of residence. Corresponds to [IMTUser::Country](imtuser_country.md "Country").  
FIELD_USER_LANGUAGE | 11 | string | User language. Corresponds to [IMTUser::Language](imtuser_language.md "Language").  
FIELD_USER_CITY | 12 | string | Client's city of residence. Corresponds to [IMTUser::City](imtuser_city.md "City").  
FIELD_USER_STATE | 13 | string | Client's state (region) of residence. Corresponds to [IMTUser::State](imtuser_state.md "State").  
FIELD_USER_ZIP_CODE | 14 | string | Client's postal code. Corresponds to [IMTUser::ZIPCode](imtuser_zipcode.md "ZipCode").  
FIELD_USER_ADDRESS | 15 | string | Client's address. Corresponds to [IMTUser::Address](imtuser_address.md "Address").  
FIELD_USER_PHONE | 16 | string | Client's phone number. Corresponds to [IMTUser::Phone](imtuser_phone.md "Phone").  
FIELD_USER_EMAIL | 17 | string | Client's email address. Corresponds to [IMTUser::EMail](imtuser_email.md "EMail").  
FIELD_USER_ID | 18 | string | The number of a client's identity document. Corresponds to [IMTUser::ID](imtuser_id.md "ID").  
FIELD_USER_STATUS | 19 | string | Client status. Corresponds to [IMTUser::Status](imtuser_status.md "Status").  
FIELD_USER_COMMENT | 20 | string | Comment to the account. Corresponds to [IMTUser::Comment](imtuser_comment.md "Comment").  
FIELD_USER_COLOR | 21 | uint | The color of the client entry. Corresponds to [IMTUser::Color](imtuser_color.md "Color").  
FIELD_USER_PHONE_PASSWORD | 22 | string | Client's phone password. Corresponds to [IMTUser::PhonePassword](imtuser_phonepassword.md "PhonePassword").  
FIELD_USER_LEVERAGE | 23 | uint | Account leverage. Corresponds to [IMTUser::Leverage](imtuser_leverage.md "Leverage").  
FIELD_USER_AGENT | 24 | uint | Client's agent account number. Corresponds to [IMTUser::Agent](imtuser_agent.md "Agent").  
FIELD_USER_BALANCE | 25 | double | Account balance. Corresponds to [IMTUser::Balance](imtuser_balance.md "Balance").  
FIELD_USER_CREDIT | 26 | double | The amount of funds credited to the account. Corresponds to [IMTUser::Credit](imtuser_credit.md "Credit").  
FIELD_USER_INTEREST_RATE | 27 | double | The annual interest rate amount accrued for the current month. Corresponds to [IMTUser::InterestRate](imtuser_interestrate.md "InterestRate").  
FIELD_USER_COMMISSION_DAILY | 28 | double | The amount of commissions charged from the account per day. Corresponds to [IMTUser::CommissionDaily](imtuser_commissiondaily.md "CommissionDaily").  
FIELD_USER_COMMISSION_MONTHLY | 29 | double | The total amount of commissions charged from the account for the current month. Corresponds to [IMTUser::CommissionMonthly](imtuser_commissionmonthly.md "CommissionMonthly").  
FIELD_USER_COMMISSION_AGENT_DAILY | 30 | double | The amount of agent commissions charged for trade operations performed on the account, for the day. Corresponds to [IMTUser::CommissionAgentDaily](imtuser_commissionagentdaily.md "CommissionAgentDaily").  
FIELD_USER_COMMISSION_AGENT_MONTHLY | 31 | double | The amount of agent commissions charged for trade operations on the account for the current month. Corresponds to [IMTUser::CommissionAgentMonthly](imtuser_commissionagentmonthly.md "CommissionAgentMonthly").  
FIELD_USER_BALANCE_PREV_DAY | 32 | double | Account balance as of the end of the previous day. Corresponds to [IMTUser::BalancePrevDay](imtuser_balanceprevtday.md "BalancePrevDay").  
FIELD_USER_BALANCE_PREV_MONTH | 33 | double | Account balance as of the end of the previous trading month. Corresponds to [IMTUser::BalancePrevMonth](imtuser_balanceprevmonth.md "BalancePrevMonth").  
FIELD_USER_EQUITY_PREV_DAY | 34 | double | Account equity as of the end of the previous day. Corresponds to [IMTUser::EquityPrevDay](imtuser_equityprevday.md "EquityPrevDay").  
FIELD_USER_EQUITY_PREV_MONTH | 35 | double | Account equity as of the end of the previous month. Corresponds to [IMTUser::EquityPrevMonth](imtuser_equityprevmonth.md "EquityPrevMonth").  
FIELD_USER_LAST_PASS_CHANGE | 36 | int | Date of the last account password change. Corresponds to [IMTUser::LastPassChange](imtuser_lastpasschange.md "LastPassChange").  
FIELD_USER_MQID | 37 | string | Client's MetaQuotes ID. Corresponds to [IMTUser::MQID](imtuser_mqid.md "MQID").  
FIELD_USER_LEAD_CAMPAIGN | 38 | string | Lead campaign � the name of an advertising campaign by which the client who opened this account, was attracted. Corresponds to [IMTUser::LeadSource](imtuser_leadsource.md "LeadSource").  
FIELD_USER_LEAD_SOURCE | 39 | string | Lead source � a website the a client has come from. Corresponds to [IMTUser::LeadCampaign](imtuser_leadcampaign.md "LeadCampaign").  
FIELD_USER_CLIENT_ID | 40 | uint | The ID of the client to whom the account belongs. Corresponds to [IMTUser::Login](imtuser_login.md "Login").  
FIELD_USER_FIRST |  |  | Beginning of enumeration of trading account fields. Corresponds to FIELD_USER_LOGIN.  
FIELD_USER_LAST |  |  | End of enumeration of trading account fields. Corresponds to FIELD_USER_CLIENT_ID.  
Client Fields  
FIELD_CLIENT_ID | 1001 | uint | Client ID.  
FIELD_CLIENT_CREATED_TIME | 1002 | int | Client creation date in the number of seconds since 01.01.1970.  
FIELD_CLIENT_CREATED_BY | 1003 | int | The login of the manager who created the client.  
FIELD_CLIENT_MODIFIED_TIME | 1004 | int | The date of the last modification of the client record, in seconds since 01.01.1970.  
FIELD_CLIENT_MODIFIED_BY | 1005 | int | The login of the manager who made the last changes to the client record.  
FIELD_CLIENT_TYPE | 1006 | uint | Client type. Passed as a value from the [IMTDatasetField::EnClientType](imtdatasetfield_enum.htm#enclienttype) enumeration.  
FIELD_CLIENT_STATUS | 1007 | uint | Client status. Passed as a value from the [IMTDatasetField::EnClientStatus](imtdatasetfield_enum.htm#enclientstatus) enumeration.  
FIELD_CLIENT_ASSIGNED_MANAGER | 1008 | int | The login of the manager who is responsible the client.  
FIELD_CLIENT_COMMENT | 1009 | string | A comment to the client record.  
FIELD_CLIENT_COMPLIANCE_APPROVED_BY | 1010 | int | The login of the manager who approved the client.  
FIELD_CLIENT_COMPLIANCE_CLIENT_CATEGORY | 1011 | string | Client compliance category (client classification based on the regulator rules).  
FIELD_CLIENT_COMPLIANCE_TIME_APPROVAL | 1012 | int | Client approval time in seconds since 01.01.1970.  
FIELD_CLIENT_COMPLIANCE_TIME_TERMINATION | 1013 | int | Date of termination of service provision to the client in seconds since 01.01.1970.  
FIELD_CLIENT_LEAD_CAMPAIGN | 1014 | string | Lead campaign � the name of an advertising campaign the client was attracted by.  
FIELD_CLIENT_LEAD_SOURCE | 1015 | string | Lead source � a website the client has come from.  
FIELD_CLIENT_INTRODUCER | 1016 | int | The login (trading account) of the user who attracted this client.  
FIELD_CLIENT_PERSON_TITLE | 1017 | string | Client title, such as Mr. or Mrs.  
FIELD_CLIENT_PERSON_NAME | 1018 | string | The client's first name.  
FIELD_CLIENT_PERSON_MIDDLE_NAME | 1019 | string | The client's middle name.  
FIELD_CLIENT_PERSON_LAST_NAME | 1020 | string | The client's last name.  
FIELD_CLIENT_PERSON_BIRTH_DATE | 1021 | int | The client's date birth in seconds since 01.01.1970.  
FIELD_CLIENT_PERSON_CITIZENSHIP | 1022 | string | The client's citizenship.  
FIELD_CLIENT_PERSON_GENDER | 1023 | int | The client's gender. Passed as a value from the [IMTDatasetField::EnClientType](imtdatasetfield_enum.htm#engender) enumeration.  
FIELD_CLIENT_PERSON_TAX_ID | 1024 | string | The client's tax payer ID, such as TIN.  
FIELD_CLIENT_PERSON_DOCUMENT_TYPE | 1025 | string | Client's document: passport, driver's license, etc.  
FIELD_CLIENT_PERSON_DOCUMENT_NUMBER | 1026 | string | Document number.  
FIELD_CLIENT_PERSON_DOCUMENT_DATE | 1027 | int | Client's document issue date in seconds since 01.01.1970.  
FIELD_CLIENT_PERSON_DOCUMENT_EXTRA | 1028 | string | Additional client details.  
FIELD_CLIENT_PERSON_EMPLOYMENT | 1029 | uint | Client's employment status. Passed as a value of the [IMTDatasetField::EnEmployment](imtdatasetfield_enum.htm#enemployment) enumeration.  
FIELD_CLIENT_PERSON_INDUSTRY | 1030 | uint | Client's employment industry. Passed as a value of the [IMTDatasetField::EnEmploymentIndustry](imtdatasetfield_enum.htm#enemploymentindustry) enumeration.  
FIELD_CLIENT_PERSON_EDUCATION | 1031 | uint | Client's education. Passed as a value of the [IMTDatasetField::EnEducationLevel](imtdatasetfield_enum.htm#eneducationlevel) enumeration.  
FIELD_CLIENT_PERSON_WEALTH_SOURCE | 1032 | uint | Client's income source. Passed as a value of the [IMTDatasetField::EnWealthSource](imtdatasetfield_enum.htm#enwealthsource) enumeration.  
FIELD_CLIENT_PERSON_ANNUAL_INCOME | 1033 | int | Client's annual income.  
FIELD_CLIENT_PERSON_NET_WORTH | 1034 | int | Client's net assets.  
FIELD_CLIENT_PERSON_ANNUAL_DEPOSIT | 1035 | int | Client's annual deposit.  
FIELD_CLIENT_COMPANY_NAME | 1036 | string | Company name (for corporate clients).  
FIELD_CLIENT_COMPANY_REG_NUMBER | 1037 | string | Registration number (for corporate clients).  
FIELD_CLIENT_COMPANY_REG_DATE | 1038 | int | Company registration date (for corporate clients).  
FIELD_CLIENT_COMPANY_REG_AUTHORITY | 1039 | string | Company registration authority (for corporate clients).  
FIELD_CLIENT_COMPANY_VAT | 1040 | string | VAT number (for corporate clients).  
FIELD_CLIENT_COMPANY_LEI | 1041 | string | LEI number for EMIR reports (for corporate clients).  
FIELD_CLIENT_COMPANY_LICENSE_NUMBER | 1042 | string | License number (for corporate clients).  
FIELD_CLIENT_COMPANY_LICENSE_AUTHORITY | 1043 | string | Licensing authority (for corporate clients).  
FIELD_CLIENT_COMPANY_COUNTRY | 1044 | string | Company registration country (for corporate clients).  
FIELD_CLIENT_COMPANY_ADDRESS | 1045 | string | Legal address of the company (for corporate clients).  
FIELD_CLIENT_COMPANY_WEBSITE | 1046 | string | Website address (for corporate clients).  
FIELD_CLIENT_CONTACT_PREFERRED | 1047 | string | Preferred contact method. Passed as a value of the [IMTDatasetField::EnPreferredCommunication](imtdatasetfield_enum.htm#enpreferredcommunication) enumeration.  
FIELD_CLIENT_CONTACT_LANGUAGE | 1048 | uint | The language spoken by the client. Specified in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).  
FIELD_CLIENT_CONTACT_EMAIL | 1049 | string | Client's email address.  
FIELD_CLIENT_CONTACT_PHONE | 1050 | string | Client's phone number.  
FIELD_CLIENT_CONTACT_MESSENGERS | 1051 | string | List of the client's accounts in instant messengers.  
FIELD_CLIENT_CONTACT_SOCIALNETWORKS | 1052 | string | List of the client's accounts in social networks.  
FIELD_CLIENT_CONTACT_LAST_DATE | 1053 | int | The date of the last contact with the client, in seconds since 01.01.1970.  
FIELD_CLIENT_ADDRESS_COUNTRY | 1054 | string | The client's country of residence.  
FIELD_CLIENT_ADDRESS_POSTCODE | 1055 | string | The client's zip code.  
FIELD_CLIENT_ADDRESS_STREET | 1056 | string | The client's address, including the street name, building number, etc.  
FIELD_CLIENT_ADDRESS_STATE | 1057 | string | The client's region of residence.  
FIELD_CLIENT_ADDRESS_CITY | 1058 | string | The client's city of residence.  
FIELD_CLIENT_EXPERIENCE_FX | 1059 | uint | Client's Forex trading experience. Passed as a value of the [IMTDatasetField::EnTradingExperience](imtdatasetfield_enum.htm#entradingexperience) enumeration.  
FIELD_CLIENT_EXPERIENCE_CFD | 1060 | uint | Client's CFD trading experience. Passed as a value of the [IMTDatasetField::EnTradingExperience](imtdatasetfield_enum.htm#entradingexperience) enumeration.  
FIELD_CLIENT_EXPERIENCE_FUTURES | 1061 | uint | Client's Futures trading experience. Passed as a value of the [IMTDatasetField::EnTradingExperience](imtdatasetfield_enum.htm#entradingexperience) enumeration.  
FIELD_CLIENT_EXPERIENCE_STOCKS | 1062 | uint | Client's stock trading experience. Passed as a value of the [IMTDatasetField::EnTradingExperience](imtdatasetfield_enum.htm#entradingexperience) enumeration.  
FIELD_CLIENT_FIRST |  |  | Beginning of enumeration of client fields. Corresponds to FIELD_CLIENT_ID.  
FIELD_CLIENT_LAST |  |  | End of enumeration of client fields. Corresponds to FIELD_CLIENT_EXPERIENCE_STOCKS.  
Deal Fields  
FIELD_DEAL_DEAL | 2001 | uint | Deal ticket. Corresponds to [IMTDeal::Deal](imtdeal_deal.md "Deal").  
FIELD_DEAL_EXTERNAL_ID | 2002 | string | The ID of a deal in an external trading system. Corresponds to [IMTDeal::ExternalID](imtdeal_externalid.md "ExternalID").  
FIELD_DEAL_LOGIN | 2003 | uint | The login of the client, to whom the deal belongs. Corresponds to [IMTDeal::Login](imtdeal_login.md "Login").  
FIELD_DEAL_DEALER | 2004 | uint | The login of the dealer who processed the deal. Corresponds to [IMTDeal::Dealer](imtdeal_dealer.md "Dealer").  
FIELD_DEAL_ORDER | 2005 | uint | The ticket of the order as a result of which the deal was executed. Corresponds to [IMTDeal::Order](imtdeal_order.md "Order").  
FIELD_DEAL_ACTION | 2006 | uint | Type of action performed with the deal. Corresponds to [IMTDeal::Action](imtdeal_action.md "Action").  
FIELD_DEAL_ENTRY | 2007 | uint | Deal direction. Corresponds to [IMTDeal::Entry](imtdeal_entry.md "Entry").  
FIELD_DEAL_DIGITS | 2008 | uint | Number of decimal places in the deal price. Corresponds to [IMTDeal::Digits](imtdeal_digits.md "Digits").  
FIELD_DEAL_DIGITS_CURRENCY | 2009 | uint | Number of decimal places in the deposit currency of the client who has executed the deal. Corresponds to [IMTDeal::DigitsCurrency](imtdeal_digitscurrency.md "DigitsCurrency").  
FIELD_DEAL_CONTRACT_SIZE | 2010 | double | Contract size of the symbol for which the deal was executed. Corresponds to [IMTDeal::ContractSize](imtdeal_contractsize.md "ContractSize").  
FIELD_DEAL_TIME | 2011 | int | Deal execution time. Corresponds to [IMTDeal::Time](imtdeal_time.md "Time").  
FIELD_DEAL_SYMBOL | 2012 | string | The symbol, for which a deal is executed. Corresponds to [IMTDeal::Symbol](imtdeal_symbol.md "Symbol").  
FIELD_DEAL_PRICE | 2013 | double | Deal execution price. Corresponds to [IMTDeal::Price](imtdeal_price.md "Price").  
FIELD_DEAL_VOLUME_EXT | 2014 | uint | deal volume. Corresponds to [IMTDeal::VolumeExt](imtdeal_volumeext.md "VolumeExt").  
FIELD_DEAL_PROFIT | 2015 | double | Profit from a deal. Corresponds to [IMTDeal::Profit](imtdeal_profit.md "Profit").  
FIELD_DEAL_STORAGE | 2016 | double | Swap size for a deal. Corresponds to [IMTDeal::Storage](imtdeal_storage.md "Storage").  
FIELD_DEAL_COMMISSION | 2017 | double | Commission amount charged for a deal. Corresponds to [IMTDeal::Commission](imtdeal_commission.md "Commission").  
FIELD_DEAL_RATE_PROFIT | 2018 | double | The exchange rate for converting deal profit currency to the deposit currency of a client group. Corresponds to [IMTDeal::RateProfit](imtdeal_rateprofit.md "RateProfit").  
FIELD_DEAL_RATE_MARGIN | 2019 | double | The exchange rate for converting deal margin currency to client deposit currency. Corresponds to [IMTDeal::RateMargin](imtdeal_ratemargin.md "RateMargin").  
FIELD_DEAL_EXPERT_ID | 2020 | uint | The ID of the Expert Advisor which has executed the deal. Corresponds to [IMTDeal::ExpertID](imtdeal_expertid.md "ExpertID").  
FIELD_DEAL_POSITION_ID | 2021 | uint | Position identifier (ticket) for the deal. Corresponds to [IMTDeal::PositionID](imtdeal_positionid.md "PositionID").  
FIELD_DEAL_COMMENT | 2022 | string | Deal comment. Corresponds to [IMTDeal::Comment](imtdeal_comment.md "Comment").  
FIELD_DEAL_PROFIT_RAW | 2023 | double | Profit/loss gained as a result of performing a deal. Corresponds to [IMTDeal::ProfitRaw](imtdeal_profitraw.md "ProfitRaw").  
FIELD_DEAL_PRICE_POSITION | 2024 | double | The price of the position closed by this deal. Corresponds to [IMTDeal::PricePosition](imtdeal_priceposition.md "PricePosition").  
FIELD_DEAL_VOLUME_CLOSED_EXT | 2025 | uint | Position volume closed by the deal. Corresponds to [IMTDeal::VolumeClosedExt](imtdeal_volumeclosedext.md "VolumeClosedExt").  
FIELD_DEAL_TICK_VALUE | 2026 | double | Tick price for the deal. Corresponds to [IMTDeal::TickValue](imtdeal_tickvalue.md "TickValue").  
FIELD_DEAL_TICK_SIZE | 2027 | double | Tick value for the deal. Corresponds to [IMTDeal::TickSize](imtdeal_ticksize.md "TickSize").  
FIELD_DEAL_FLAGS | 2028 | uint | Common flags of a deal. Corresponds to [IMTDeal::Flags](imtdeal_flags.md "Flags").  
FIELD_DEAL_TIME_MSC | 2029 | int | Deal execution time in milliseconds. Corresponds to [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc").  
FIELD_DEAL_REASON | 2030 | uint | Reason for the deal. corresponds to [IMTDeal::Reason](imtdeal_reason.md "Reason").  
FIELD_DEAL_GATEWAY | 2031 | string | ID of a gateway, through which the deal was executed Corresponds to [IMTDeal::Gateway](imtdeal_gateway.md "Gateway").  
FIELD_DEAL_PRICE_GATEWAY | 2032 | double | The actual price of a deal conducted via a gateway in an external trading system, not taking into account the gateway price transformation settings. Corresponds to [IMTDeal::PriceGateway](imtdeal_pricegateway.md "PriceGateway").  
FIELD_DEAL_MODIFICATION_FLAGS | 2033 | uint | Deal modification flags. Corresponds to [IMTDeal::ModificationFlags](imtdeal_modificationflags.md "ModificationFlags").  
FIELD_DEAL_PRICE_SL | 2034 | double | Stop Loss level of the deal. Corresponds to [IMTDeal::PriceSL](imtdeal_pricesl.md "PriceSL").  
FIELD_DEAL_PRICE_TP | 2035 | double | Take Profit level of the deal. Corresponds to [IMTDeal::PriceTP](imtdeal_pricetp.md "PriceTP").  
FIELD_DEAL_FEE | 2036 | double | Fee amount per deal. Corresponds to [IMTDeal::Fee](imtdeal_fee.md "Fee").  
FIELD_DEAL_VALUE | 2037 | double | The deal execution value in the client's deposit currency. Corresponds to [IMTDeal::Value](imtdeal_value.md "Value").  
FIELD_DEAL_MARKET_BID | 2038 | double | The market Bid price as at the time of deal execution by the server. Corresponds to [IMTDeal::MarketBid](imtdeal_marketbid.md "MarketBid").  
FIELD_DEAL_MARKET_ASK | 2039 | double | The market Ask price as at the time of deal execution by the server. Corresponds to [IMTDeal::MarketAsk](imtdeal_marketask.md "MarketAsk").  
FIELD_DEAL_MARKET_LAST | 2040 | double | The market Last price as at the time of deal execution by the server. Corresponds to [IMTDeal::MarketLast](imtdeal_marketlast.md "MarketLast").  
FIELD_DEAL_VOLUME_GATEWAY_EXT | 2041 | uint | The volume at which the deal is actually routed to an external trading system through the gateway. Corresponds to [IMTDeal::VolumeGatewayExt](imtdeal_volumegatewayext.md "VolumeGatewayExt").  
FIELD_DEAL_ACTION_GATEWAY | 2042 | uint | The direction with which the deal is actually routed to an external trading system through the gateway. Corresponds to [IMTDeal::ActionGateway](imtdeal_actiongateway.md "ActionGateway").  
FIELD_DEAL_FIRST |  |  | Beginning of enumeration of deal fields. Corresponds to FIELD_DEAL_DEAL.  
FIELD_DEAL_LAST |  |  | End of enumeration of deal fields. Corresponds to FIELD_DEAL_PRICE_TP.  
Order fields  
FIELD_ORDER_ORDER | 3001 | uint | Order ticket. Corresponds to[IMTOrder::Order](imtorder_order.md "Order").  
FIELD_ORDER_EXTERNAL_ID | 3002 | string | Order ID in external trading systems. Corresponds to [IMTOrder::ExternalID](imtorder_externalid.md "ExternalID").  
FIELD_ORDER_LOGIN | 3003 | uint | The login of the client, to whom the order belongs. Corresponds to [IMTOrder::Login](imtorder_login.md "Login").  
FIELD_ORDER_DEALER | 3004 | uint | The login of a dealer, who has processed an order. Corresponds to [IMTOrder::Dealer](imtorder_dealer.md "Dealer").  
FIELD_ORDER_SYMBOL | 3005 | string | Order symbol. Corresponds to [IMTOrder::Symbol](imtorder_symbol.md "Symbol").  
FIELD_ORDER_TIME_SETUP | 3006 | int | Order placing time. Corresponds to [IMTOrder::TimeSetup](imtorder_timesetup.md "TimeSetup").  
FIELD_ORDER_TIME_EXPIRATION | 3007 | int | Order expiration time. Corresponds to [IMTOrder::TimeExpiration](imtorder_timeexpiration.md "TimeExpiration").  
FIELD_ORDER_TIME_DONE | 3008 | int | Order execution time. Corresponds to [IMTOrder::TimeDone](imtorder_timedone.md "TimeDone").  
FIELD_ORDER_TYPE | 3009 | uint | Order type. Corresponds to [IMTOrder::Type](imtorder_type.md "Type").  
FIELD_ORDER_TYPE_FILL | 3010 | uint | Order filling type. Corresponds to [IMTOrder::TypeFill](imtorder_typefill.md "TypeFill").  
FIELD_ORDER_TYPE_TIME | 3011 | uint | Order expiration type. Corresponds to [IMTOrder::TypeTime](imtorder_typetime.md "TypeTime").  
FIELD_ORDER_TYPE_REASON | 3012 | uint | Reason for placing an order. Corresponds to [IMTOrder::Reason](imtorder_reason.md "Reason").  
FIELD_ORDER_PRICE_ORDER | 3013 | double | Order price. Corresponds to [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder").  
FIELD_ORDER_PRICE_TRIGGER | 3014 | double | Price at which a limit order is placed upon triggering of a stop limit order. Corresponds to [IMTOrder::PriceTrigger](imtorder_pricetrigger.md "PriceTrigger").  
FIELD_ORDER_PRICE_CURRENT | 3015 | double | The current price of the symbol, for which an order has been placed. Corresponds to [IMTOrder::PriceCurrent](imtorder_pricecurrent.md "PriceCurrent").  
FIELD_ORDER_PRICE_SL | 3016 | double | The Stop Loss level of an order. Corresponds to [IMTOrder::PriceSL](imtorder_pricesl.md "PriceSL").  
FIELD_ORDER_PRICE_TP | 3017 | double | The Take Profit level of an order. Corresponds to [IMTOrder::PriceTP](imtorder_pricetp.md "PriceTP").  
FIELD_ORDER_VOLUME_INITIAL | 3018 | uint | Initial volume of the order. Corresponds to [IMTOrder::VolumeInitialExt](imtorder_volumeinitialext.md "VolumeInitialExt").  
FIELD_ORDER_VOLUME_CURRENT | 3019 | uint | The current unfilled volume of an order. Corresponds to [IMTOrder::VolumeCurrentExt](imtorder_volumecurrentext.md "VolumeCurrentExt").  
FIELD_ORDER_STATE | 3020 | uint | Current order state. Corresponds to [IMTOrder::State](imtorder_state.md "State").  
FIELD_ORDER_EXPERT_ID | 3021 | uint | The ID of the Expert Advisor that has placed the order. [IMTOrder::ExpertID](imtorder_expertid.md "ExpertID")  
FIELD_ORDER_POSITION_ID | 3022 | uint | The position ID (ticket) set in the order. Corresponds to [IMTOrder::PositionID](imtorder_positionid.md "PositionID").  
FIELD_ORDER_COMMENT | 3023 | string | Comment to an order. Corresponds to [IMTOrder::Comment](imtorder_comment.md "Comment").  
FIELD_ORDER_CONTRACT_SIZE | 3024 | double | The contract size of the symbol, for which an order was placed. Corresponds to [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize").  
FIELD_ORDER_DIGITS | 3025 | uint | The number of decimal places in the order price. Corresponds to [IMTOrder::Digits](imtorder_digits.md "Digits").  
FIELD_ORDER_DIGITS_CURRENCY | 3026 | uint | The number of decimal places the deposit currency of the client who has placed the order. Corresponds to [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency").  
FIELD_ORDER_POSITION_BY_ID | 3027 | uint | Position identifier (ticket) of the opposite position for the order. Corresponds to [IMTOrder::PositionByID](imtorder_positionbyid.md "PositionByID").  
FIELD_ORDER_MARGIN_RATE | 3028 | double | The exchange rate for converting the symbol margin currency to the client deposit currency used for calculating the margin for the order. Corresponds to [IMTOrder::RateMargin](imtorder_ratemargin.md "RateMargin").  
FIELD_ORDER_TIME_SETUP_MSC | 3029 | int | Order placing time in milliseconds. Corresponds to [IMTOrder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc").  
FIELD_ORDER_TIME_DONE_MSC | 3030 | int | Order execution time in milliseconds. Corresponds to [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc").  
FIELD_ORDER_MODIFICATION_FLAGS | 3031 | uint | Order modification flags. Corresponds to [IMTOrder::ModificationFlags](imtorder_modificationflags.md "ModificationFlags").  
FIELD_ORDER_ACTIVATION_MODE | 3032 | uint | Order activation type. Corresponds to [IMTOrder::ActivationMode](imtorder_activationmode.md "ActivationMode").  
FIELD_ORDER_ACTIVATION_TIME | 3033 | int | Order activation time. Corresponds to [IMTOrder::ActivationTime](imtorder_activationtime.md "ActivationTime").  
FIELD_ORDER_ACTIVATION_PRICE | 3034 | double | The price, at which the order was activated. Corresponds to [IMTOrder::ActivationPrice](imtorder_activationprice.md "ActivationPrice").  
FIELD_ORDER_ACTIVATION_FLAGS | 3035 | uint | Order activation flags. Corresponds to [IMTOrder::ActivationFlags](imtorder_activationflags.md "ActivationFlags").  
FIELD_ORDER_GROUP | 3036 | string | The group of the client who has placed the order.  
FIELD_ORDER_FIRST |  |  | Beginning of enumeration of order fields. Corresponds to FIELD_ORDER_ORDER.  
FIELD_ORDER_LAST |  |  | End of enumeration of order fields. Corresponds to FIELD_ORDER_GROUP.  
Daily Report fields |  |  |   
FIELD_DAILY_DATE_TIME | 4001 | int | Daily report generation date and time. Corresponds to [IMTDaily::Datetime](imtdaily_datetime.md "Datetime").  
FIELD_DAILY_DATE_TIME_PREV | 4002 | int | The date and time of the previous daily report generation. Corresponds to [IMTDaily::DatetimePrev](imtdaily_datetimeprev.md "DatetimePrev").  
FIELD_DAILY_LOGIN | 4003 | uint | The login of the client for whom the daily report is generated. Corresponds to [IMTDaily::Login](imtdaily_login.md "Login").  
FIELD_DAILY_NAME | 4004 | string | The name of a client in a daily report. Corresponds to [IMTDaily::Name](imtdaily_name.md "Name").  
FIELD_DAILY_GROUP | 4005 | string | Client group in a daily report. Corresponds to [IMTDaily::Group](imtdaily_group.md "Group").  
FIELD_DAILY_CURRENCY | 4006 | string | Client's deposit currency in a daily report. Corresponds to [IMTDaily::Currency](imtdaily_currency.md "Currency").  
FIELD_DAILY_DIGITS_CURRENCY | 4007 | uint | The number of decimal places in the client's deposit currency in a daily report. Corresponds to [IMTDaily::CurrencyDigits](imtdaily_currencydigits.md "CurrencyDigits").  
FIELD_DAILY_COMPANY | 4008 | string | The company which manages the client group in a daily report. Corresponds to [IMTDaily::Company](imtdaily_company.md "Company").  
FIELD_DAILY_EMAIL | 4009 | string | An email of a client in a daily report. Corresponds to [IMTDaily::EMail](imtdaily_email.md "EMail").  
FIELD_DAILY_BALANCE | 4010 | double | The client balance amount in a daily report. Corresponds to [IMTDaily::Balance](imtdaily_balance.md "Balance").  
FIELD_DAILY_CREDIT | 4011 | double | The amount of a client's credit funds in a daily report. Corresponds to [IMTDaily::Credit](imtdaily_credit.md "Credit").  
FIELD_DAILY_INTEREST_RATE | 4012 | double | The annual interest rate of a client in a daily report. Corresponds to [IMTDaily::InterestRate](imtdaily_interestrate.md "InterestRate").  
FIELD_DAILY_COMMISSION_DAILY | 4013 | double | The amount of commissions charged from a client for a day in the report. Corresponds to [IMTDaily::CommissionDaily](imtdaily_commissiondaily.md "CommissionDaily").  
FIELD_DAILY_COMMISSION_MONTHLY | 4014 | double | The total amount of commissions charged from a client for the current month in a report. Corresponds to [IMTDaily::CommissionMonthly](imtdaily_commissionmonthly.md "CommissionMonthly").  
FIELD_DAILY_AGENT_DAILY | 4015 | double | The size of agent commissions charged for a client's trading operations for a day. Corresponds to [IMTDaily::AgentDaily](imtdaily_agentdaily.md "AgentDaily").  
FIELD_DAILY_AGENT_MONTHLY | 4016 | double | The amount of agent commissions charged for a client's trading operations for the current month. Corresponds to [IMTDaily::AgentMonthly](imtdaily_agentmonthly.md "AgentMonthly").  
FIELD_DAILY_BALANCE_PREV_DAY | 4017 | double | Client balance as of the end of the previous day. Corresponds to [IMTDaily::BalancePrevDay](imtdaily_balanceprevday.md "BalancePrevDay").  
FIELD_DAILY_BALANCE_PREV_MONTH | 4018 | double | Client balance as of the end of the previous trading month. Corresponds to [IMTDaily::BalancePrevMonth](imtdaily_balanceprevmonth.md "BalancePrevMonth").  
FIELD_DAILY_EQUITY_PREV_DAY | 4019 | double | Client equity as of the end of the previous day. Corresponds to [IMTDaily::EquityPrevDay](imtdaily_equityprevday.md "EquityPrevDay").  
FIELD_DAILY_EQUITY_PREV_MONTH | 4020 | double | Client equity amount as of the end of the previous trading month. Corresponds to [IMTDaily::EquityPrevMonth](imtdaily_equityprevmonth.md "EquityPrevMonth").  
FIELD_DAILY_MARGIN | 4021 | double | Client margin amount in a daily report. Corresponds to [IMTDaily::Margin](imtdaily_margin.md "Margin").  
FIELD_DAILY_MARGIN_FREE | 4022 | double | The amount of the client's free margin in a daily report. Corresponds to [IMTDaily::MarginFree](imtdaily_marginfree.md "MarginFree").  
FIELD_DAILY_MARGIN_LEVEL | 4023 | double | The margin level of a client in the daily report. Corresponds to [IMTDaily::MarginLevel](imtdaily_marginlevel.md "MarginLevel").  
FIELD_DAILY_MARGIN_LEVERAGE | 4024 | uint | The margin leverage of a client in the daily report. Corresponds to [IMTDaily::MarginLeverage](imtdaily_marginleverage.md "MarginLeverage").  
FIELD_DAILY_PROFIT | 4025 | double | The size of the current profit for all open positions of a client in a daily report. Corresponds to [IMTDaily::Profit](imtdaily_profit.md "Profit").  
FIELD_DAILY_PROFIT_STORAGE | 4026 | double | The current size of swaps charged for a client's open positions for a day, but not yet reflected in the balance. Corresponds to [IMTDaily::ProfitStorage](imtdaily_profitstorage.md "ProfitStorage").  
FIELD_DAILY_PROFIT_COMMISSION | 4027 | double | The current unfixed commission of a client in a daily report. Corresponds to [IMTDaily::ProfitCommission](imtdaily_profitcommission.md "ProfitCommission").  
FIELD_DAILY_PROFIT_EQUITY | 4028 | double | The amount of the current floating equity of a client in a daily report. Corresponds to [IMTDaily::ProfitEquity](imtdaily_profitequity.md "ProfitEquity").  
FIELD_DAILY_DAILY_PROFIT | 4029 | double | The amount of a client's recorded daily profit. Corresponds to [IMTDaily::DailyProfit](imtdaily_dailyprofit.md "DailyProfit").  
FIELD_DAILY_DAILY_BALANCE | 4030 | double | The amount accrued to a client's balance during the reported day. Corresponds to [IMTDaily::DailyBalance](imtdaily_dailybalance.md "DailyBalance").  
FIELD_DAILY_DAILY_CREDIT | 4031 | double | The amount of credit given to a client during the reported day. Corresponds to [IMTDaily::DailyCredit](imtdaily_dailycredit.md "DailyCredit").  
FIELD_DAILY_DAILY_CHARGE | 4032 | double | The amount of other charges to the client's balance during the reported day. Corresponds to [IMTDaily::DailyCharge](imtdaily_dailycharge.md "DailyCharge").  
FIELD_DAILY_DAILY_CORRECTION | 4033 | double | The amount of corrective balance operations for the reported day. Corresponds to [IMTDaily::DailyCorrection](imtdaily_dailycorrection.md "DailyCorrection").  
FIELD_DAILY_DAILY_BONUS | 4034 | double | The amount of bonuses transfered to the client's balance for the reported day. Corresponds to [IMTDaily::DailyBonus](imtdaily_dailybonus.md "DailyBonus").  
FIELD_DAILY_DAILY_STORAGE | 4035 | double | The amount of swaps calculated for a client for a reported day. Corresponds to [IMTDaily::DailyStorage](imtdaily_dailystorage.md "DailyStorage").  
FIELD_DAILY_DAILY_COMM_INSTANT | 4036 | double | The amount of client's instant commissions for the client during the reported day. Corresponds to [IMTDaily::DailyCommInstant](imtdaily_dailycomminstant.md "DailyCommInstant").  
FIELD_DAILY_DAILY_COMM_ROUND | 4037 | double | The amount of client's turnover commissions for a reported day. Corresponds to [IMTDaily::DailyCommRound](imtdaily_dailycommround.md "DailyCommRound").  
FIELD_DAILY_DAILY_AGENT | 4038 | double | The size of agent commissions charged for a client's trading operations for a reported day. Corresponds to [IMTDaily::DailyAgent](imtdaily_dailyagent.md "DailyAgent").  
FIELD_DAILY_DAILY_INTEREST | 4039 | double | The amount accrued to a client as part of the annual interest rate for the reported day. Corresponds to [IMTDaily::DailyInterest](imtdaily_dailyinterest.md "DailyInterest").  
FIELD_DAILY_PROFIT_ASSETS | 4040 | double | The current amount of a client's assets in a daily report. Corresponds to [IMTDaily::ProfitAssets](imtdaily_profitassets.md "ProfitAssets").  
FIELD_DAILY_PROFIT_LIABILITIES | 4041 | double | The current amount of a client's liabilities in a daily report. Corresponds to [IMTDaily::ProfitLiabilities](imtdaily_profitliabilities.md "ProfitLiabilities").  
FIELD_DAILY_FIRST |  |  | Beginning of enumeration of the daily report fields. Corresponds to FIELD_DAILY_DATE_TIME.  
FIELD_DAILY_LAST |  |  | End of enumeration of the daily report fields. Corresponds to FIELD_DAILY_PROFIT_LIABILITIES.  
Position fields  
FIELD_POSITION_LOGIN | 5001 | uint | The login of the client, to whom the trade position belongs. Corresponds to [IMTPosition::Login](imtposition_login.md "Login").  
FIELD_POSITION_SYMBOL | 5002 | string | The symbol of the trading position. Corresponds to [IMTPosition::Symbol](imtposition_symbol.md "Symbol").  
FIELD_POSITION_ACTION | 5003 | uint | Position type. Corresponds to [IMTPosition::Action](imtposition_action.md "Action").  
FIELD_POSITION_DIGITS | 5004 | uint | The number of decimal places in the position price. Corresponds to [IMTPosition::Digits](imtposition_digits.md "Digits").  
FIELD_POSITION_DIGITS_CURRENCY | 5005 | uint | The number of decimal places in the deposit currency of the client by whom the position was opened. Corresponds to [IMTPosition::DigitsCurrency](imtposition_digitscurrency.md "DigitsCurrency").  
FIELD_POSITION_CONTRACT_SIZE | 5006 | double | The contract size of the symbol, for which the position is opened. Corresponds to [IMTPosition::ContractSize](imtposition_contractsize.md "ContractSize").  
FIELD_POSITION_TIME_CREATE | 5007 | int | Position creation time. Corresponds to [IMTPosition::TimeCreate](imtposition_timecreate.md "TimeCreate").  
FIELD_POSITION_TIME_UPDATE | 5008 | int | Last position modification time. Corresponds to [IMTPosition::TimeUpdate](imtposition_timeupdate.md "TimeUpdate").  
FIELD_POSITION_PRICE_OPEN | 5009 | double | The weighted average position open price. Corresponds to [IMTPosition::PriceOpen](imtposition_priceopen.md "PriceOpen").  
FIELD_POSITION_PRICE_CURRENT | 5010 | double | The current price of the symbol, for which a trade position was opened. Corresponds to [IMTPosition::PriceCurrent](imtposition_pricecurrent.md "PriceCurrent").  
FIELD_POSITION_PRICE_SL | 5011 | double | The position Stop Loss level. Corresponds to [IMTPosition::PriceSL](imtposition_pricesl.md "PriceSL").  
FIELD_POSITION_PRICE_TP | 5012 | double | The position Take Profit level. Corresponds to [IMTPosition::PriceTP](imtposition_pricetp.md "PriceTP").  
FIELD_POSITION_VOLUME | 5013 | uint | Trading position volume. Corresponds to [IMTPosition::Volume](imtposition_volume.md "Volume").  
FIELD_POSITION_PROFIT | 5014 | double | Current profit/loss of a trading position. Corresponds to [IMTPosition::Profit](imtposition_profit.md "Profit").  
FIELD_POSITION_STORAGE | 5015 | double | Position swap amount. Corresponds to [IMTPosition::Storage](imtposition_storage.md "Storage").  
FIELD_POSITION_RATE_PROFIT | 5016 | double | The rate of conversion of the position profit currency to the client group deposit currency. Corresponds to [IMTPosition::RateProfit](imtposition_rateprofit.md "RateProfit").  
FIELD_POSITION_RATE_MARGIN | 5017 | double | The rate of conversion of the position margin currency to the client's deposit currency. Corresponds to [IMTPosition::RateMargin](imtposition_ratemargin.md "RateMargin").  
FIELD_POSITION_EXPERT_ID | 5018 | uint | The ID of the Expert Advisor which opened the position. Corresponds to [IMTPosition::ExpertID](imtposition_expertid.md "ExpertID").  
FIELD_POSITION_EXPERT_POSITION_ID | 5019 | uint | Position identifier. Corresponds to [IMTPosition::ExpertPositionID](imtposition_expertpositionid.md "ExpertPositionID").  
FIELD_POSITION_COMMENT | 5020 | string | A comment to the position. Corresponds to [IMTPosition::Comment](imtposition_comment.md "Comment").  
FIELD_POSITION_ACTIVATION_MODE | 5021 | uint | Position activation type. Corresponds to [IMTPosition::ActivationMode](imtposition_activationmode.md "ActivationMode").  
FIELD_POSITION_ACTIVATION_TIME | 5022 | int | Position activation time. Corresponds to [IMTPosition::ActivationTime](imtposition_activationtime.md "ActivationTime").  
FIELD_POSITION_ACTIVATION_PRICE | 5023 | double | Position activation price. Corresponds to [IMTPosition::ActivationPrice](imtposition_activationprice.md "ActivationPrice").  
FIELD_POSITION_ACTIVATION_FLAGS | 5024 | uint | Position activation flag. Corresponds to [IMTPosition::ActivationFlags](imtposition_activationflags.md "ActivationFlags").  
FIELD_POSITION_TIME_CREATE_MSC | 5025 | int | Position creation time in milliseconds. Corresponds to [IMTPosition::TimeCreateMsc](imtposition_timecreatemsc.md "TimeCreateMsc").  
FIELD_POSITION_TIME_UPDATE_MSC | 5026 | int | Last position modification time in milliseconds. Corresponds to [IMTPosition::TimeUpdateMsc](imtposition_timeupdatemsc.md "TimeUpdateMsc").  
FIELD_POSITION_DEALER | 5027 | uint | The login of the dealer by whom the open position was processed. Corresponds to [IMTPosition::Dealer](imtposition_dealer.md "Dealer").  
FIELD_POSITION_POSITION | 5028 | uint | Trading position ticket (unique number) in the MetaTrader 5 platform. Corresponds to [IMTPosition::Position](imtposition_position.md "Position").  
FIELD_POSITION_EXTERNAL_ID | 5029 | uint | Position ticket (unique number) in the external trading system. Corresponds to [IMTPosition::ExternalID](imtposition_externalid.md "ExternalID").  
FIELD_POSITION_MODIFICATION_FLAGS | 5030 | uint | Position modification flag. Corresponds to [IMTPosition::ModificationFlags](imtposition_modificationflags.md "ModificationFlags").  
FIELD_POSITION_REASON | 5031 | uint | The reason for opening a position Corresponds to [IMTPosition::Reason](imtposition_reason.md "Reason").  
FIELD_POSITION_VOLUME_EXT | 5032 | uint | Trading position volume with a high accuracy. Corresponds to [IMTPosition::VolumeExt](imtposition_volumeext.md "VolumeExt").  
FIELD_POSITION_GROUP | 5033 | string | The group of the client who has opened the position.  
FIELD_POSITION_PRICE_GATEWAY | 5034 | uint | The price at which the position is actually opened through the gateway in the external system. Corresponds to [IMTPosition::PriceGateway](imtposition_pricegateway.md "PriceGateway").  
FIELD_POSITION_VOLUME_GATEWAY_EXT | 5035 | uint | The volume at which the deal is actually routed to an external trading system through the gateway. Corresponds to [IMTPosition::VolumeGatewayExt](imtposition_volumegatewayext.md "VolumeGatewayExt").  
FIELD_POSITION_ACTION_GATEWAY | 5036 | uint | The direction with which the deal is actually routed to an external trading system through the gateway. Corresponds to [IMTPosition::ActionGateway](imtposition_actiongateway.md "ActionGateway").  
FIELD_POSITION_FIRST |  |  | Beginning of enumeration of position fields. Corresponds to FIELD_POSITION_LOGIN.  
FIELD_POSITION_LAST |  |  | End of enumeration of position fields. Corresponds to FIELD_POSITION_GROUP.  
Account trading state fields  
FIELD_ACCOUNT_LOGIN | 6001 | uint | The login of the client, to whom the trading account belongs. Corresponds to [IMTAccount::Login](imtaccount_login.md "Login").  
FIELD_ACCOUNT_GROUP | 6002 | string | The group to which the account belongs.  
FIELD_ACCOUNT_CURRENCY_DIGITS | 6003 | uint | The number of decimal places in the account deposit currency. Corresponds to [IMTAccount::CurrencyDigits](imtaccount_currencydigits.md "CurrencyDigits").  
FIELD_ACCOUNT_BALANCE | 6004 | double | Trading account balance. Corresponds to [IMTAccount::Balance](imtaccount_balance.md "Balance").  
FIELD_ACCOUNT_CREDIT | 6005 | double | The current amount of credit given to an account. Corresponds to [IMTAccount::Credit](imtaccount_credit.md "Credit").  
FIELD_ACCOUNT_MARGIN | 6006 | double | The current value of the account margin. Corresponds to [IMTAccount::Margin](imtaccount_margin.md "Margin").  
FIELD_ACCOUNT_MARGIN_FREE | 6007 | double | The free margin of an account. Corresponds to [IMTAccount::MarginFree](imtaccount_marginfree.md "MarginFree").  
FIELD_ACCOUNT_MARGIN_LEVEL | 6008 | double | Margin level as a percentage. Corresponds to [IMTAccount::MarginLevel](imtaccount_marginlevel.md "MarginLevel").  
FIELD_ACCOUNT_MARGIN_LEVERAGE | 6009 | uint | Leverage margin. Corresponds to [IMTAccount::MarginLeverage](imtaccount_marginleverage.md "MarginLeverage").  
FIELD_ACCOUNT_MARGIN_INITIAL | 6010 | double | The current size of the initial margin of positions on a trading account. Corresponds to [IMTAccount::MarginInitial](imtaccount_margininitial.md "MarginInitial").  
FIELD_ACCOUNT_MARGIN_MAINTENANCE | 6011 | double | The current size of the maintenance margin of positions on a trading account. Corresponds to [IMTAccount::MarginMaintenance](imtaccount_marginmaintenance.md "MarginMaintenance").  
FIELD_ACCOUNT_PROFIT | 6012 | double | The size of the current profit for all open positions. Corresponds to [IMTAccount::Profit](imtaccount_profit.md "Profit").  
FIELD_ACCOUNT_STORAGE | 6013 | double | The size of swaps charged for open positions on the account. Corresponds to [IMTAccount::Storage](imtaccount_storage.md "Storage").  
FIELD_ACCOUNT_COMMISSION | 6014 | double | The size of commissions charged for all transactions on the account. Corresponds to [IMTAccount::Commission](imtaccount_commission.md "Commission").  
FIELD_ACCOUNT_FLOATING | 6015 | double | The size of floating profit/loss of open positions on the account. Corresponds to [IMTAccount::Floating](imtaccount_floating.md "Floating").  
FIELD_ACCOUNT_EQUITY | 6016 | double | The account equity. Corresponds to [IMTAccount::Equity](imtaccount_equity.md "Equity").  
FIELD_ACCOUNT_BLOCKED_COMMISSION | 6017 | double | The amount of the standard commission locked on the account, which has been accumulated during the day/month. Corresponds to [IMTAccount::BlockedCommission](imtaccount_blockedcommission.md "BlockedCommission").  
FIELD_ACCOUNT_BLOCKED_PROFIT | 6018 | double | The amount of intraday profit blocked on the account. Corresponds to [IMTAccount::BlockedProfit](imtaccount_blockedprofit.md "BlockedProfit").  
FIELD_ACCOUNT_ASSETS | 6019 | double | The current total amount of assets on a trading account. Corresponds to [IMTAccount::Assets](imtaccount_assets.md "Assets").  
FIELD_ACCOUNT_LIABILITIES | 6020 | double | The current total amount of liabilities on a trading account. Corresponds to [IMTAccount::Liabilities](imtaccount_liabilities.md "Liabilities").  
FIELD_ACCOUNT_STOP_OUT_ACTIVATION | 6021 | uint | The account status as per the minimum amount of funds on the account required to maintain trading positions. Corresponds to [IMTAccount::SOActivation](imtaccount_soactivation.md "SOActivation").  
FIELD_ACCOUNT_STOP_OUT_TIME | 6022 | int | The time when the Margin Call or Stop Out level was reached. Corresponds to [IMTAccount::SOTime](imtaccount_sotime.md "SOTime").  
FIELD_ACCOUNT_STOP_OUT_LEVEL | 6023 | double | The margin level of an account at the time it reached the Stop Out level. Corresponds to [IMTAccount::SOLevel](imtaccount_solevel.md "SOLevel").  
FIELD_ACCOUNT_STOP_OUT_EQUITY | 6024 | double | The account equity at the time the account reached the Stop Out level. Corresponds to [IMTAccount::SOEquity](imtaccount_soequity.md "SOEquity").  
FIELD_ACCOUNT_STOP_OUT_MARGIN | 6025 | double | The account margin volume at the time the account reached the Stop Out level. Corresponds to [IMTAccount::SOMargin](imtaccount_somargin.md "SOMargin").  
FIELD_ACCOUNT_FIRST |  |  | Beginning of enumeration of account trading state fields. Corresponds to FIELD_ACCOUNT_LOGIN.  
FIELD_ACCOUNT_LAST |  |  | End of enumeration of account trading state fields. Corresponds to FIELD_ACCOUNT_STOP_OUT_MARGIN.  
FIELD_FIRST |  |  | Beginning of enumeration. Corresponds to FIELD_USER_LOGIN.  
FIELD_LAST |  |  | End of enumeration. Corresponds to FIELD_ACCOUNT_LAST.  
The enumeration is used in the [IMTDatasetField::Id](imtdatasetfield_id.md "Id") method.
IMTDatasetField::EnFieldFlags
Field flags are enumerated in IMTDatasetField::EnFieldFlags:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_NONE | 0x0000000 | No flags. |
| FLAG_SELECT | 0x0000001 | The field is selected. If this flag is enabled, the corresponding field will be included in the resulting data set. Otherwise the field will only be used for filtering during data request. |
| FLAG_DEFAULT |  | Default flags. Corresponds to enabling of FLAG_SELECT. |
| FLAG_ALL |  | Enable all flags. |

The enumeration is used in the [IMTDatasetField::Flags](imtdatasetfield_flags.md "Flags") methods.
IMTDatasetField::EnGender
IMTDatasetField::EnGender contains the values of the Gender property:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| GENDER_UNSPECIFIED | 0 | Not specified. |
| GENDER_MALE | 1 | Male. |
| GENDER_FEMALE | 2 | Female. |
| GENDER_FIRST |  | Beginning of enumeration. Corresponds to GENDER_UNSPECIFIED. |
| GENDER_LAST |  | End of enumeration. Corresponds to GENDER_FEMALE. |

The enumeration is used for [IMTDatasetField::FIELD_CLIENT_PERSON_GENDER](imtdatasetfield_enum.htm#enfieldtype) fields.
IMTDatasetField::EnClientType
IMTDatasetField::EnClientType contains client types:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| CLIENT_TYPE_UNDEFINED | 0 | Not set. |
| CLIENT_TYPE_INDIVIDUAL | 1 | Private. |
| CLIENT_TYPE_CORPORATE | 2 | Corporate. |
| CLIENT_TYPE_FUND | 3 | Fund. |
| CLIENT_TYPE_FIRST |  | Beginning of enumeration. Corresponds to CLIENT_TYPE_UNDEFINED. |
| CLIENT_TYPE_LAST |  | End of enumeration. Corresponds to CLIENT_TYPE_CORPORATE. |

The enumeration is used in the [IMTDatasetField::Type](imtdatasetfield_type.md "Type") method.
IMTDatasetField::EnClientStatus
Client statuses are enumerated in IMTDatasetField::EnClientStatus:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| CLIENT_STATUS_UNREGISTERED | 0 | Not registered. |
| CLIENT_STATUS_REGISTERED | 100 | Registered. |
| CLIENT_STATUS_NOTINTERESTED | 200 | Not interested. |
| CLIENT_STATUS_APPLICATION_INCOMPLETED | 300 | Not completed. |
| CLIENT_STATUS_APPLICATION_COMPLETED | 400 | Completed. |
| CLIENT_STATUS_APPLICATION_INFORMATION | 500 | Informed. |
| CLIENT_STATUS_APPLICATION_REJECTED | 600 | Rejected. |
| CLIENT_STATUS_APPROVED | 700 | Approved. |
| CLIENT_STATUS_FUNDED | 800 | Funded. |
| CLIENT_STATUS_ACTIVE | 900 | Active. |
| CLIENT_STATUS_INACTIVE | 1000 | Inactive. |
| CLIENT_STATUS_SUSPENDED | 1100 | Suspended. |
| CLIENT_STATUS_CLOSED | 1200 | Closed. |
| CLIENT_STATUS_TERMINATED | 1300 | Terminated. |
| CLIENT_STATUS_FIRST |  | Beginning of enumeration. Corresponds to CLIENT_STATUS_UNREGISTERED. |
| CLIENT_STATUS_LAST |  | End of enumeration. Corresponds to CLIENT_STATUS_TERMINATED. |

The enumeration is used for [IMTDatasetField::FIELD_CLIENT_STATUS](imtdatasetfield_enum.htm#enfieldtype) fields.
IMTDatasetField::EnEmployment
IMTDatasetField::EnEmployment contains client types by employment:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| EMPLOY_UNEMPLOYED | 0 | Unemployed. |
| EMPLOY_EMPLOYED | 1 | Employed. |
| EMPLOY_SELF_EMPLOYED | 2 | Entrepreneur or self-employed. |
| EMPLOY_RETIRED | 3 | Retired. |
| EMPLOY_STUDENT | 4 | Student. |
| EMPLOY_OTHER | 5 | Other. |
| EMPLOY_FIRST |  | Beginning of enumeration. Corresponds to EMPLOY_UNEMPLOYED. |
| EMPLOY_LAST |  | End of enumeration. Corresponds to EMPLOY_OTHER. |

The enumeration is used for [IMTDatasetField::FIELD_CLIENT_PERSON_EMPLOYMENT](imtdatasetfield_enum.htm#enfieldtype) fields.
IMTDatasetField::EnEmploymentIndustry
IMTDatasetField::EnEmploymentIndustry contains the enumeration of client employment areas:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| INDUSTRY_NONE | 0 | None. |
| INDUSTRY_AGRICULTURE | 1 | Agriculture, food and natural resources. |
| INDUSTRY_CONSTRUCTION | 2 | Architecture and construction. |
| INDUSTRY_MANAGEMENT | 3 | Administration and business management. |
| INDUSTRY_COMMUNICATION | 4 | Art, audio/video technology and communication. |
| INDUSTRY_EDUCATION | 5 | Education and training. |
| INDUSTRY_GOVERNMENT | 6 | State and administrative management. |
| INDUSTRY_HEALTHCARE | 7 | Health care. |
| INDUSTRY_TOURISM | 8 | Tourism and hospitality. |
| INDUSTRY_IT | 9 | Information technology. |
| INDUSTRY_SECURITY | 10 | Legal and public safety, correction and protection services. |
| INDUSTRY_MANUFACTURING | 11 | Production. |
| INDUSTRY_MARKETING | 12 | Marketing and sales. |
| INDUSTRY_SCIENCE | 13 | Science and technology. |
| INDUSTRY_ENGINEERING | 14 | Engineering and mathematics. |
| INDUSTRY_TRANSPORT | 15 | Transportation, distribution and logistics. |
| INDUSTRY_OTHER | 16 | Other. |
| INDUSTRY_FIRST |  | Beginning of enumeration. Corresponds to INDUSTRY_NONE. |
| INDUSTRY_LAST |  | End of enumeration. Corresponds to INDUSTRY_OTHER. |

The enumeration is used for [IMTDatasetField::FIELD_CLIENT_PERSON_INDUSTRY](imtdatasetfield_enum.htm#enfieldtype) fields.
IMTDatasetField::EnEducationLevel
IMTDatasetField::EnEducationLevel contains the enumeration of client education levels:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| EDUCATION_LEVEL_NONE | 0 | None. |
| EDUCATION_LEVEL_HIGH_SCHOOL | 1 | Secondary. |
| EDUCATION_LEVEL_BACHELOR | 2 | Bachelor's degree or equivalent. |
| EDUCATION_LEVEL_MASTER | 3 | Master's degree or equivalent. |
| EDUCATION_LEVEL_PHD | 4 | PhD or equivalent. |
| EDUCATION_LEVEL_OTHER | 5 | Other. |
| EDUCATION_LEVEL_FIRST |  | Beginning of enumeration. Corresponds to EDUCATION_LEVEL_NONE. |
| EDUCATION_LEVEL_LAST |  | End of enumeration. Corresponds to EDUCATION_LEVEL_OTHER. |

The enumeration is used for [IMTDatasetField::FIELD_CLIENT_PERSON_EDUCATION](imtdatasetfield_enum.htm#enfieldtype) fields.
IMTDatasetField::EnWealthSource
IMTDatasetField::EnWealthSource contains the enumeration of client's income sources:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| WEALTH_SOURCE_EMPLOYMENT | 0 | Employment/business |
| WEALTH_SOURCE_SAVINGS | 1 | Savings or investments. |
| WEALTH_SOURCE_INHERITANCE | 2 | Gift or inheritance. |
| WEALTH_SOURCE_OTHER | 3 | Other. |
| WEALTH_SOURCE_FIRST |  | Beginning of enumeration. Corresponds to WEALTH_SOURCE_EMPLOYMENT. |
| WEALTH_SOURCE_LAST |  | End of enumeration. Corresponds to WEALTH_SOURCE_OTHER. |

The enumeration is used for [IMTDatasetField::FIELD_CLIENT_PERSON_WEALTH_SOURCE](imtdatasetfield_enum.htm#enfieldtype) fields.
IMTDatasetField::EnPreferredCommunication
IMTDatasetField::EnPreferredCommunication contains the enumeration of preferred client contact methods:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PREFERRED_COMMUNICATION_UNDEFINED | 0 | Not specified. |
| PREFERRED_COMMUNICATION_EMAIL | 1 | Email. |
| PREFERRED_COMMUNICATION_PHONE | 2 | Phone. |
| PREFERRED_COMMUNICATION_PHONE_SMS | 3 | SMS. |
| PREFERRED_COMMUNICATION_MESSENGER | 4 | Instant messenger. |
| PREFERRED_COMMUNICATION_FIRST |  | Beginning of enumeration. Corresponds to PREFERRED_COMMUNICATION_UNDEFINED. |
| PREFERRED_COMMUNICATION_LAST |  | End of enumeration. Corresponds to PREFERRED_COMMUNICATION_MESSENGER. |

The enumeration is used for [IMTDatasetField::FIELD_CLIENT_CONTACT_PREFERRED](imtdatasetfield_enum.htm#enfieldtype) fields.
IMTDatasetField::EnTradingExperience
IMTDatasetField::EnTradingExperience contains values describing clients' financial market trading experience:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| EXPERIENCE_LESS_1_YEAR | 0 | < 1 year. |
| EXPERIENCE_1_3_YEAR | 1 | 1 � 3 years. |
| EXPERIENCE_ABOVE_3_YEAR | 2 | > 3 year. |
| EXPERIENCE_FIRST |  | Beginning of enumeration. Corresponds to EXPERIENCE_LESS_1_YEAR. |
| EXPERIENCE_LAST |  | End of enumeration. Corresponds to EXPERIENCE_ABOVE_3_YEAR. |

The enumeration is used for the following field types:
  * [IMTDatasetField::FIELD_CLIENT_EXPERIENCE_FX](imtdatasetfield_enum.htm#enfieldtype)
  * [IMTDatasetField::FIELD_CLIENT_EXPERIENCE_CFD](imtdatasetfield_enum.htm#enfieldtype)
  * [IMTDatasetField::FIELD_CLIENT_EXPERIENCE_FUTURES](imtdatasetfield_enum.htm#enfieldtype)
  * [IMTDatasetField::FIELD_CLIENT_EXPERIENCE_STOCKS](imtdatasetfield_enum.htm#enfieldtype)
