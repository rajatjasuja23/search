<div class="container-fluid" style="margin-top: 10px">

  <div class="table-row header">
    <div class="wrapper text-4">
      <div class="wrapper text-2">
        <div class="text">First Name</div>
        <div class="text">Last Name</div>
        <div class="text">Email</div>
        <div class="num"></div>
        <div class="text">Progress</div>
        <div class="text"></div>
      </div>
    </div>
  </div>

  <div class="table-row">
    <div class="wrapper text-4">
      <div class="wrapper text-2">
        <div class="text">Vasan</div>
        <div class="text">Subramanian</div>
         <div class="text" title="vasan@example.com">vasan@example.com</div>

    
        <div class="num">200kb</div>
        <div class="text"><div id="myProgress">
  <div id="myBar"></div>
</div></div>
        <div class="text">Del</div>
      </div>

    </div>
  </div>
</div>




@margin: 30px;
@text-width: 180px;
@num-width: 80px;

.table-row {
    display: flex;
  display: -webkit-flex;
    flex-direction: row;    -webkit-flex-direction: row;
    flex-wrap: no-wrap;     -webkit-flex-wrap: no-wrap;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
}

.wrapper {
  display: flex;           display: -webkit-flex;
  flex-direction: row;     -webkit-flex-direction: row;
  flex-grow: 0;            -webkit-flex-grow: 0;
}

.text-4, .text-2, .text {
  flex-grow: 1;           -webkit-flex-grow: 1;
}

.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 20px;
}

.text {
  width: @text-width;
}

.num {
  width: @num-width;
  text-align: center;
}

.vertical() {
  flex-direction: column;     -webkit-flex-direction: column;
  div {
    flex-grow: 0;  -webkit-flex-grow: 0;

    width: 100%;
  }
}

.table-row {
  padding-top: 5px;
}

.table-row.header {
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
}

#myProgress {
  width: 100%;
  background-color: #ddd;
}

#myBar {
  width: 1%;
  height: 20px;
  background-color: #4CAF50;
}