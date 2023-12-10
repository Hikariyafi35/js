const date = new Date();

            const timeInJakarta = date.toLocaleDateString('id-ID',{
                timeZone: 'Asia/Jakarta',
            });

            const timeInTokyo = date.toLocaleDateString('ja-JP',{
                timeZone: 'Asia/Tokyo',
            });

            console.log(timeInJakarta);
            console.log(timeInTokyo);