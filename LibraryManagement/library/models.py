from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    isbn = models.CharField(max_length=13, unique=True)
    publication_date = models.DateField()
    availability_status = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Borrower(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    borrowed_books = models.ManyToManyField(Book, blank=True)

    def __str__(self):
        return self.name
