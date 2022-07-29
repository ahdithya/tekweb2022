# user

## Menampilkan data user

GET: /user

response:
[
{
"id" : "",
"nama" : "",
"kampus" : "",
"ig_url: : "",
"gh_url" : "",
"yt_url" : "",
},
...
]

## Menampilkan data user dengan "id" tertentu

GET: /user/[id]

reponse:
{
"id" : "",
"nama" : "",
"kampus" : "",
"ig_url: : "",
"gh_url" : "",
"yt_url" : "",
}

# Menambahkan data pengguna

POST: /user

data:
{
"id" : "",
"nama" : "",
"kampus" : "",
"ig_url: : "",
"gh_url" : "",
"yt_url" : "",
}

response:
true // if success
false // if failure

## Edit data pengguna

PUT: /user

data:
{
"id" : "",
"nama" : "",
"kampus" : "",
"ig_url: : "",
"gh_url" : "",
"yt_url" : "",
}

response:
true // if success
false // if failure

## Menghapus data anggota

DELETE: /user/[id]

response:
true // if success
false // if failure

##Artikel

## Menampilkan data semua artikel

GET: /article

response:
[
{
"id" : "",
"title" : "",
"content" : "",
"author_id" : "",
"thumnail_url" : "",
"created_date" : "",
}
....
]

## Menampilkan data artikel dengan id tertentu

GET: /article/[id]

response:
{
"id" : "",
"title" : "",
"content" : "",
"author_id" : "",
"thumnail_url" : "",
"created_date" : "",
}

## Menambahkan data artikel

POST: /artikel

data:
{  
 "id" : "",
"title" : "",
"content" : "",
"author_id" : "",
"thumnail_url" : "",
"created_date" : "",
}

response:
true // if success
false // if failure

## Mengedit data artikel

PUT: /article

data:
{  
 "id" : "",
"title" : "",
"content" : "",
"author_id" : "",
"thumnail_url" : "",
"created_date" : "",
}

response:
true // if success
false // if failure

## Menghapus data artikel

DELETE: /article/[id]

response:
true // if success
false // if failure
