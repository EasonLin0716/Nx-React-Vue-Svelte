<script lang="ts">
    import { myLib } from '@my-nx-project/my-lib';
    let count: number = 0;
    const increment = () => {
        count += 1;
    };
</script>

<button on:click={increment}>
    count is {count}
</button>
<span>myLib says {myLib()}</span>