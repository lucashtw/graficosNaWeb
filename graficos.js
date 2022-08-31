function desenharGraficos(){
    //pizza
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
        tabela.addRows([
            ['Educação',2000],
            ['Transporte',500],
            ['Lazer',230],
            ['Saúde',100],
            ['Cartão de crédito', 900],
            ['Alimentação', 260]
        ]);

        var opcoes = {
            title: 'Tipos de Gastos',
            height: 500,
            width: 900,
            is3D: true,
            legend: 'labeled',
            pieSliceText: 'value',
            //colors:['grey','red','yellow','blue','pink','purple']
            slices: {
                1:{color:'grey'},
                2:{color:'#a6a6a6'},
                3:{color:'grey'},
                4:{offset: 0.4},
                5:{color:'grey'}
            }
        };

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));/*gerando*/
    grafico.draw(tabela, opcoes);

    //linha
    tabela = new google.visualization.DataTable();
    tabela.addColumn('string','Mês');
    tabela.addColumn('number','Gastos');
        tabela.addRows([
            ['jan',800],
            ['fev',400],
            ['mar',1100],
            ['abr',400],
            ['mai',500],
            ['jun',750],
            ['jul',1500],
            ['ago',650],
            ['set',850],
            ['out',400],
            ['nov',1000],
            ['dez',720]

        ]);

        var opcoes = {
            title: 'Gastos por mês',
            height: 200,
            width: 850,
            vAxis: {
                format: 'currency',
                gridlines: {
                    count:5,
                    color:'transparent'
                }
            },
            curveType: 'function',
            legend: 'none'
        }

    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
    grafico.draw(tabela,opcoes);
    
    //colunas
    var tabela = google.visualization.arrayToDataTable(
    [
            ['Mês','Entrada','Saída'],
            ['jan',2500,1000],
            ['fev',2000,500],
            ['mar',3000,1300],
            ['abr',1500,1700],
            ['mai',5000,2250],
            ['jun',3567,3000],
            ['jul',3452,1468],
            ['ago',1833,5250],
            ['set',3803,5500],
            ['out',1800,1000],
            ['nov',3569,1500],
            ['dez',3000,1740]
        
    ]);

    var opcoes = {
        title: 'Entradas e saídas da conta',
        width: 800,
        height: 400,
        vAxis:{
            gridlines:{color: 'transparent'},
            format: 'currency',
            title: 'Valores'
        },
        hAxis:{
            title: 'Mês'
        }
    }


    var grafico = new google.visualization.ColumnChart(
        document.getElementById('graficoColuna')); 
    grafico.draw(tabela,opcoes); 
    
    //colunas supresa
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addColumn({type: 'number', role:'annotation'});
        tabela.addRows([
            ['Educação',2000,2000],
            ['Transporte',500,500],
            ['Lazer',230,230],
            ['Saúde',100,100],
            ['Cartão de crédito',900,900],
            ['Alimentação',260,260]
        ]);
        var opcoes = {
            title: 'Tipos de Gastos',
            height:400,
            width:800,
            vAxis: {gridlines:{count:0,color: 'transparent'}},
            legend: 'none'
        }

        var grafico = new google.visualization.ColumnChart(
            document.getElementById('graficoColunaSurpresa'));
        grafico.draw(tabela,opcoes);



}