<template>
    <!-- <div class="page-campaign"> -->
    <h2>Active Campaigns</h2>
    <hr>
    <!-- </div> -->
    <div class="campaign-card">
        <div class="parent-card" v-for="index in 4" :key="index">
            <div class="card-image">
                <img src="https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1066818018.png" alt="">
            </div>
            <div class="card-action-info">
                <div class="date-time">
                    <p>Date start: 01-26-2024</p>
                    <p>Date end: 02-26-2024</p>
                </div>
                <div class="action">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                    <span class="material-symbols-outlined">
                        edit_square
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="see-more">
        <div class="line"></div>
        <p>See more</p>
        <div class="line"></div>
    </div>

</template>
<style scoped>
    h2 {
        margin-top: 100px;
        color: white;
        text-align: center;
        width: 20%;
        padding: 1rem;
        border-top-right-radius: 300px;
        border-top-left-radius: 30px;
        background: #04841C;
    }

    hr {
        color: #FDC400;
        border: none;
        border: 2px solid #FDC400;
        margin-right: 100px;
    }

    .campaign-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-left: -90px;
        margin-top: 80px;
    }
    
    .campaign-card .parent-card {
        
        background: #04841C;
        flex-wrap: wrap;
        height: 250px;
        width: 18%;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    .card-image {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 0.5rem;

    }

    .card-image img {
        width: 95%;
    }

    .card-action-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin: 20px;
    }

    .action .material-symbols-outlined {
        font-size: 1.6rem;
        color: #FDC400;
    }

    .date-time p {
        font-size: 1rem;
        margin-bottom: 5px;
        color: #fffffe;
    }

    .see-more {
        margin-top: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-right: 80px;
    }

    .see-more .line {
        border: 1px solid #FDC400;
        height: 2px;
        width: 50%;
    }

    .see-more p {
        width: 7%;
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
        color: #FDC400;
    }

    @media (max-width:1080px) {
        h2 {
            font-size: 1rem;
            width: 30%;
            margin-left: 10px;

        }
        hr{
            margin-left: 10px;
        }
        .campaign-card{
            margin-left: -50px;
        }
        .campaign-card .parent-card{
            width:35%;
            margin-bottom: 10%;
        }
    }
</style>