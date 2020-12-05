from rest_framework import authentication
from hydrostat.models import Columns, Noun
from .serializers import ColumnsSerializer, NounSerializer
from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from openpyxl import load_workbook
from hydrostat.models import *
from io import BytesIO

class NounViewSet(viewsets.ModelViewSet):
    serializer_class = NounSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Noun.objects.all()


class ColumnsViewSet(viewsets.ModelViewSet):
    serializer_class = ColumnsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Columns.objects.all()


class UploadFileView(ViewSet):    
    parser_class = (FileUploadParser,)

    def create(self, request):
        if 'file' not in request.data:
            return Response(status=400)
        try:
            file_in_memory = request.data['file'].read()
            wb = load_workbook(filename=BytesIO(file_in_memory), data_only=True).active
            
            for idx, row in enumerate(wb.rows):            
                if idx == 0 or row[0].value == None:
                    continue
                try:
                    column = Columns.objects.create(
                        bin=row[0].value,
                        noun=row[1].value, 
                        orgshop=row[2].value, 
                        status=row[3].value, 
                        notes=row[4].value, 
                        discrepacies=row[5].value, 
                        micap=True if row[6].value == 'YES' else False,
                        dateIn=row[7].value, 
                        dateOut=row[8].value, 
                        initiateDate=row[9].value, 
                        enditemDocnumber=row[10].value, 
                        dueoutpieces=row[11].value, 
                        dueOutDocnumbers=row[12].value, 
                        difm=row[13].value, 
                        incomingserialnumber=row[14].value, 
                        jobcontrolnumber=row[15].value, 
                        tailnumber=row[16].value, 
                        three50tag=row[17].value, 
                        outgoingserialnumber=row[18].value, 
                        sevenLevel=row[19].value, 
                    )
                except:
                    pass
        except:
            pass
        return Response(status=200)

