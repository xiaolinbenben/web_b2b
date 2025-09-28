from rest_framework.decorators import api_view, authentication_classes

from myapp.auth.authentication import AdminTokenAuthtication
from myapp.handler import APIResponse
from myapp.models import BasicTdk
from myapp.permission.permission import check_if_demo
from myapp.serializers import BasicTdkSerializer
from myapp.utils import after_call, clear_cache


@api_view(['GET'])
@authentication_classes([AdminTokenAuthtication])
def list_api(request):
    instance = BasicTdk.get_solo()
    if instance is None:
        instance = BasicTdk.objects.create()
    serializer = BasicTdkSerializer(instance)
    return APIResponse(code=0, msg='查询成功', data=serializer.data)


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
@check_if_demo
@after_call(clear_cache)
def update(request):
    pk = request.data.get('id')
    if pk:
        try:
            instance = BasicTdk.objects.get(pk=pk)
        except BasicTdk.DoesNotExist:
            return APIResponse(code=1, msg='对象不存在')
    else:
        instance = BasicTdk.get_solo()
        if instance is None:
            instance = BasicTdk.objects.create()
    serializer = BasicTdkSerializer(instance, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='更新成功', data=serializer.data)
    return APIResponse(code=1, msg='更新失败', data=serializer.errors)
