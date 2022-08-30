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



}