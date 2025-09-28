from rest_framework.decorators import api_view, authentication_classes
from rest_framework.pagination import PageNumberPagination

from myapp.auth.authentication import AdminTokenAuthtication
from myapp.handler import APIResponse
from myapp.models import Download
from myapp.permission.permission import check_if_demo
from myapp.serializers import DownloadSerializer
from myapp.utils import after_call, clear_cache


class MyPageNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'pageSize'
    max_page_size = 100


@api_view(['GET'])
@authentication_classes([AdminTokenAuthtication])
def list_api(request):
    keyword = request.GET.get('keyword', '')
    queryset = Download.objects.filter(title__icontains=keyword).order_by('-create_time')
    paginator = MyPageNumberPagination()
    page = paginator.paginate_queryset(queryset, request)
    serializer = DownloadSerializer(page, many=True)
    return APIResponse(code=0, msg='查询成功', data=serializer.data, total=queryset.count())


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
@check_if_demo
@after_call(clear_cache)
def create(request):
    if not request.data.get('title'):
        return APIResponse(code=1, msg='标题不能为空')
    serializer = DownloadSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='创建成功', data=serializer.data)
    return APIResponse(code=1, msg='创建失败', data=serializer.errors)


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
@check_if_demo
@after_call(clear_cache)
def update(request):
    pk = request.data.get('id')
    if not pk:
        return APIResponse(code=1, msg='缺少参数 id')
    try:
        instance = Download.objects.get(pk=pk)
    except Download.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')
    serializer = DownloadSerializer(instance, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='更新成功', data=serializer.data)
    return APIResponse(code=1, msg='更新失败', data=serializer.errors)


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
@check_if_demo
@after_call(clear_cache)
def delete(request):
    ids = request.data.get('ids')
    if not ids:
        return APIResponse(code=1, msg='缺少参数 ids')
    Download.objects.filter(id__in=[item for item in ids.split(',') if item]).delete()
    return APIResponse(code=0, msg='删除成功')
