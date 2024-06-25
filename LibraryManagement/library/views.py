from rest_framework import generics
from .models import Book, Borrower
from .serializers import BookSerializer, BorrowerSerializer

class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BorrowerListCreate(generics.ListCreateAPIView):
    queryset = Borrower.objects.all()
    serializer_class = BorrowerSerializer

class BorrowerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Borrower.objects.all()
    serializer_class = BorrowerSerializer

class BorrowBook(generics.UpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def update(self, request, *args, **kwargs):
        book = self.get_object()
        book.availability_status = False
        book.save()
        return Response(BookSerializer(book).data)

class ReturnBook(generics.UpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def update(self, request, *args, **kwargs):
        book = self.get_object()
        book.availability_status = True
        book.save()
        return Response(BookSerializer(book).data)


# superuser -> username=admin, password=adminkomal