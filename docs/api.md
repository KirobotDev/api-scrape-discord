
# API Documentation

## POST /scrape/random
Trigger a scrape for random IDs.

**Request**:
```json
{
  "count": 10
}
```

**Response**:
```json
{
  "results": ["- username#1234 (ID: 123456789012345678)", "..."]
}
```
