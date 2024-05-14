const exampleResponse = {
    "success": true,
    "store": {
      "name": "TAMBO+",
      "address": "AV. JAVIER PRADO ESTE 20563529378, AV. LA MARINA NRO. 2997 URB. MARANGA-LIMA-LIMA",
      "city": "Lima",
      "country": "Peru",
      "telephone": ""
    },
    "invoice": {
      "invoice_type": "Boleta",
      "number": "B261-0099965",
      "issue_date": "2024-09-05",
      "issue_time": "19:38:07"
    },
    "items": [
      {
        "code": "1010003",
        "description": "AGUA SAN LUIS",
        "quantity": 1,
        "unit_price": 3.9,
        "discount": 0,
        "total": 3.9
      },
      {
        "code": "1010023",
        "description": "ARROZ CHAUFA TAMBO TUGO PAG x 1 UND",
        "quantity": 1,
        "unit_price": 6.61,
        "discount": 0,
        "total": 6.61
      }
    ],
    "totals": {
      "total_discount": 0,
      "subtotal": 7.8,
      "taxable_operations": 0,
      "igv": 0,
      "total_sale": 7.8
    },
    "payment": {
      "method": "IZIPAY",
      "card": "",
      "amount": 7.8,
      "currency": "PEN",
      "amount_in_words": "Y 80/100 SOLES"
    },
    "cashier": {
      "register_number": "1261-2",
      "attendant": "SILVIA AMPARO VIDAL SA"
    },
    "client": {
      "ruc": "00000001",
      "name": "CLIENTE VARIOS",
      "address": "",
      "email": ""
    },
    "return_policy": {
      "timeframe": "",
      "condition": "",
      "restrictions": ""
    },
    "website": "http://consultaef.incorp.pe/Public/20563529378/search",
    "category": "",
    "subcategory": "",
    "data_in_text": ""
  }

module.exports = exampleResponse