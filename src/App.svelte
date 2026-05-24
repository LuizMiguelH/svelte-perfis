<script lang="ts">
  import Usuario from "./components/Usuario.svelte";
  import Cabecalho from "./components/Cabecalho.svelte";
  import type IUsuario from "./interfaces/IUsuario";
  

  let usuario: IUsuario | null = null;
  function definirUsuario(evento: CustomEvent<IUsuario | null>) {
    usuario = evento.detail
  }

</script>
<Cabecalho on:aoAlterarUsuario={definirUsuario}/>
<div class="app">

  {#if usuario}
    <Usuario usuario = { usuario }/>
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }

</style>
