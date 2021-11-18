/*С помощью метода fetch получить масcив данных 
по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, 
картинку (статичную по умолчанию, или рандомную, или по ссылке из данных) 
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) 
и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, 
добавление блоков в дерево сделать синхронной функцией.*/

const URL = 'https://jsonplaceholder.typicode.com/photos';

async function getData(url) {
    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();  
}

getData(URL)
    .then(function (data) {

        return data.map(function(photo) {
            
            let block = document.createElement('div');
            let title = document.createElement('div');
            title.innerHTML = `${photo.title}`;
            let id = document.createElement('div');
            id.innerHTML = `${photo.id}`;
            let pic_url = `${photo.thumbnailUrl}`;

            outputData(block, title, id, pic_url);
        })
    })
   .catch(err => console.err(err))

function outputData(block, title, id, pic_url) {
   
if (id.innerHTML < 10 ) {
    document.body.append(block);
    block.style.display = 'flex';
    block.style.margin = '5px';

    let img = document.createElement('img');
    img.setAttribute('src', pic_url);
    block.append(img);

    block.append(title);
    title.style.padding = '15px';
    title.style.width = '150px';
    
    let buttons_area = document.createElement('div');
    block.append(buttons_area);
    buttons_area.style.width = '150px';
    buttons_area.style.display = 'flex';
    buttons_area.style.flexDirection = 'column';
    buttons_area.style.padding = '15px';

    let button_info = document.createElement('button');
    button_info.innerHTML = 'Инфо';
    buttons_area.append(button_info);
    button_info.style.width = '120px';
    button_info.style.marginBottom = '5px';

    button_info.addEventListener("click", function (event) {
    alert(`${id.innerHTML}`);
    });

    let button_delete = document.createElement('button');
    button_delete.innerHTML = 'Удалить';
    buttons_area.append(button_delete);
    button_delete.style.width = '120px';

    button_delete.addEventListener("click", function (event) {
    block.remove()
    });

    } else {
        return;
    }
}