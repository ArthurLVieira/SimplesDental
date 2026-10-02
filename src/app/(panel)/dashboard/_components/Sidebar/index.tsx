export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li>
            <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/dashboard/settings"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Configurações
            </a>
          </li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </nav>
    </aside>
  );
}
