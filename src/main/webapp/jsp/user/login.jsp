<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <script src="${pageContext.request.contextPath}/resources/spm_modules/jquery/1.9.1/jquery.min.js"></script>
</head>
<body style="background: url('${pageContext.request.contextPath}/resources/template/images/login-bg.jpg') no-repeat;">
<form id="loginJumpFormId" action="${loginUrl}" method="post" style="visibility: hidden;">
    <input id="loginSuccessUrl" type="hidden" name="url"  value="${redirect}" />
</form>	
</body>
<script type="text/javascript">
    var _base = '${pageContext.request.contextPath}';
    var curr =  window.location.href;
	var end = curr.indexOf(_base);
	var href = curr.substring(0,end) + _base+"/user/success";
	$("#loginSuccessUrl").val(href); */
	$('#loginJumpFormId').submit();
</script>
</html>