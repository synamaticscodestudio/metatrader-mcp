# PriceToInt (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Price Functions ](smtmath_price.md "Price Functions")/ PriceToInt | [](smtmath_pricenormalize.md "PriceNormalize") [](smtmath_pricetodouble.md "PriceToDouble") |
| --- | --- | --- |
| --- | --- |

SMTMath::PriceToInt
Converting a price from double to int.
C++
static INT64 SMTMath::PriceToInt( const double price, // Input price const UINT digits // Accuracy )  
---  
.NET (Gateway/Manager API)
static long SMTMath.PriceToInt( double price, // Input price uint digits // Accuracy )  
---  
Parameters
price
[in] An input price with a floating point.
digits
[in] The number of digits after the decimal point in the resulting price.
Return Value
The resulting price.
Note
The value of the digits parameter should not exceed the value of the [MTAPI_PRICE_DIGITS_MAX](smtmath_constants.md "Constants") constant.