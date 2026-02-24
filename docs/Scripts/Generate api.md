# Generate API từ swagger

## Yêu cầu
- Swagger v3
- Enum phải là string
- Tên props, params phải tuân thủ camelcase

## Setup
file: `.env.example`
```
SWAGGER_URL=http://172.16.5.36:31768/api/v1/v3/api-docs
GENERATED_API_PATH=app/api/generated
FETCHER_IMPORT_PATH=../../Fetcher
```

## Run
```
yarn api:generate
``` 
