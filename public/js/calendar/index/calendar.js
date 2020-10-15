document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      
      initialDate: '1988-12-01',
      initialView: 'dayGridMonth',

      headerToolbar:{
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay'
      },

      customButtons:{

         Miboton:{
          text: "Boton",
          click: function(){
            alert("Holaaaa me apretaste!!");
            // mostrar modal
            $('#exampleModal').modal('toggle');
          },

        }
      }, 

      eventClick: function(info){

        //console.log(info);
        console.log(info.event.title);
        console.log(info.event.start);

        console.log(info.event.end);
        console.log(info.event.textColor);
        console.log(info.event.backgroundColor);

        console.log(info.event.extendedProps.description);

      },

      dateClick: function(info){

        $('#txtDate').val(info.dateStr);
        $('#exampleModal').modal();
        console.log(info);
        calendar.addEvent({ title: "Evento x", date: info.dateStr });

      },
      events: [
            {
              title: 'Mi evento 1',
              start: '2020-10-06 12:30:00',
              description: 'Descripcion del evento 1',

            },
            {
              title: 'Mi evento 2',
              start: '2020-10-20 12:00:00',
              end: '2020-10-29 12:00:00',
              color: 'green',
              textColor: 'black',
              description: 'Descripcion del evento 2'
              

            }
            
          ]

    });
    calendar.setOption('locale', 'es');
    calendar.render();

    $('#btnAgregar').click(function(){

        getDatosGUI("POST");
    });


    function getDatosGUI(method){

      newEvento = {
        title: $('#txtTitle').val(),
        description: $('#txtDescription').val(),
        color: $('#txtColor').val(),
        textcolor: '#FFFFFF',
        start: $('#txtDate').val()+" "+$('#txtTime').val(),
        end: $('#txtDate').val()+" "+$('#txtTime').val(),
        '_method':method
      }

      console.log(newEvento);

    }

  });
