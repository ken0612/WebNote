# JSP

## 1.基本概念
* JSP (JavaServer Pages) 是一種用於建立動態Web頁面的技術，它與Servlet結合使用，能夠生成HTML或其他格式的頁面。

## 2.JSP指令
* Page Directive（page指令）： 用於設置頁面的屬性，如語言、內容類型、編碼等。
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
```
* Include Directive（include指令）： 用於包含其他資源，如其他JSP頁面、HTML頁面或文本文件。
```JSP
<%@ include file="header.jsp" %>
```
* Taglib Directive（taglib指令）： 用於引入自定義標籤庫，擴展JSP的功能。
```jsp
<%@ taglib uri="http://www.example.com/mytags" prefix="my" %>
```
## 3.內嵌Java代碼
* 使用 <% %> 來內嵌Java代碼。
```jsp
<% int x = 10; %>
```

## 4.輸出內容
* 使用'out'對象輸出內容到頁面。
```jsp
<% out.print("Hello, World!"); %>
```

## 5.訪問Servlet的Request和Response對象
* 使用 request 和 response 對象來訪問HTTP請求和響應。
```jsp
<%
    String paramValue = request.getParameter("paramName");
    out.print("Value of paramName: " + paramValue);
%>
```
## 6. 內部導向（Forward）
* 使用 <jsp:forward> 進行內部導向，轉發請求到其他頁面。
```jsp
<jsp:forward page="target.jsp" />
```
## 7.作用範圍 （Scope）
* 有四種主要的作用範圍：page、request、session 和 application，用於存儲和訪問屬性的不同範圍。

## 8.自定義標籤 （taglib）
* 自定義標籤允許擴展JSP的功能，可以簡化代碼並實現模塊化設計。
```jsp
<my:customTag></my:customTag>
```
## 9.錯誤處理
* 使用 <% %> 內嵌Java代碼處理異常，或者使用 \<error-page\> 配置全局錯誤處理頁面。

## 10.表單處理
* 使用HTML表單元素收集用戶輸入，使用request.getParameter() 來獲取表單數據。


## \<jsp:useBean> 與 直接在<%>裡面建立物件？
\<jsp:useBean> 標籤的存在是為了實現更好的代碼結構、可維護性和重用性。雖然你可以在 <% %> 內嵌Java代碼中直接創建一個物件，但使用 \<jsp:useBean> 有一些優勢和用途：

1. 分離邏輯和表示： 使用 \<jsp:useBean> 可以將Java對象的創建和初始化與JSP頁面的表示分離開來。這有助於更清晰地區分JSP的界面層和Java的業務邏輯層。
2. 重用性： 通過在 \<jsp:useBean> 中指定 id 和 class，你可以在多個地方重用相同的Java對象。這對於在不同的部分或頁面上使用相同的數據或業務邏輯非常有用。
4. 作用範圍控制： \<jsp:useBean> 允許你指定Java對象的作用範圍（page、request、session 或 application）。這使你能夠根據需要控制對象的可見性和生命週期。
5. 自動創建對象： 如果Java對象不存在，\<jsp:useBean> 可以自動創建它。這消除了手動創建對象的需要，並確保對象在需要時可用。


儘管你可以在 <% %> 中直接創建Java對象，但這樣做可能會導致代碼難以維護和理解，特別是當需要在多個地方使用相同對象時。使用 \<jsp:useBean> 可以使代碼更具可讀性，更易於管理，並且符合良好的代碼結構原則。
總之，\<jsp:useBean> 標籤存在的目的是為了提供更好的代碼結構、可維護性和重用性，使JSP開發更加方便和高效。


## 11. JSP directives （JSP頁面指令）
用於設定頁面的各種功能。
1. import：用於引入Java類，以便在JSP頁面中使用這些類的功能。
2. contentType：設置響應的內容類型，通常是指明頁面返回的內容類型，如HTML。
3. extends：指定生成的Servlet類的父類，通常是HttpServlet的子類。
4. info：提供一個關於JSP頁面的描述性信息。
5. buffer：設置響應緩衝區的大小，以確定響應的數據如何緩存。
6. language：設置JSP頁面使用的程式語言，通常是Java。
7. isELIgnored：設置是否忽略表達式語言（EL），默認為false，表示允許使用EL。
8. isThreadSafe：設置頁面是否是多線程安全的，默認為true。
9. autoFlush：設置是否自動刷新響應緩衝區，默認為true。
10. session：指示是否允許使用Session對象，默認為true，表示允許使用Session。
11. pageEncoding：設置頁面的字符編碼，通常是指定頁面使用的字符編碼，如UTF-8。
12. errorPage：指定錯誤頁面的URL，當JSP頁面發生錯誤時導向該頁面。
13. isErrorPage：指定是否將該頁面視為錯誤頁面，默認為false。

## 12. Jsp Include Directive （JSP包含指令）
語法
```jsp
<%@ include file="resourceName" %>  
```
可以將網頁模組化



page
request
session
application
四種不種域可以設定存取權限
並且可以透過EL語法
pageScope. name 直接獲得存在該域中的參數


## 13.總結
JSP=可以將java語法直接寫在html裡面的一種編寫動態網頁的工具
可以將數值存入分別是page,request,session,application中，
四種權限分別代表不同的存取範圍，並可在不同網頁提取存在權限中的值
現今各種框架的底層原理基本上算是jsp的延伸
（jsp的自定義標籤會破壞html原有的格式，容易導致瀏覽器不支援）